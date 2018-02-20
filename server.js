
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')
const pickOrder = require('./src/assets/pickOrder')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, 'build', 'index.html'))
})

io.of('/update').on('connection', (client) => {
  client.broadcast.emit('updateMe', null)
})

const reserveTime = 130

let timerClients = []
let step = 0
let reserve = {
  firstPick: reserveTime,
  team2: reserveTime
}
let team = 'firstPick'
let time

let timer
const timePerTurn = 30
io.of('/timer').on('connection', (client) => {
  console.log('connected', client.id)
  timerClients.push(client)

  client.on('start', () => {
    console.log('starting', client.id)
    time = timePerTurn
    step = step + 1

    timer = setInterval(() => {
      if (time >= 0) {
        timerClients.forEach(timerClient => timerClient.emit('time', {
          countdown: time,
          reserve: reserve
        }))
        time = time - 1
      }

      if (time === -1 && reserve[team] >= 0) {
        timerClients.forEach(timerClient => timerClient.emit('time', {
          countdown: reserve[team],
          reserve: reserve
        }))
        reserve[team] = reserve[team] - 1
      }

      if (time < 0 && reserve[team] < 0) {
        if (step < 22) {
          pickOrder[step] && timerClients[0].emit('random', pickOrder[step].team)

          time = timePerTurn
          step = step + 1
          team = pickOrder[step] && pickOrder[step].team
        } else if (step === 22) {
          pickOrder[step] && timerClients[0].emit('random', pickOrder[step].team)
          timerClients.forEach(timerClient => timerClient.emit('time', null))
          reserve = {
            firstPick: reserveTime,
            team2: reserveTime
          }
          step = 0
          team = 'firstPick'
          clearInterval(timer)
        } else {
          timerClients.forEach(timerClient => timerClient.emit('time', null))
          reserve = {
            firstPick: reserveTime,
            team2: reserveTime
          }
          step = 0
          team = 'firstPick'
          clearInterval(timer)
        }
      }
    }, 1000)
  })

  client.on('pick', () => {
    if (step < 22) {
      time = timePerTurn
      step = step + 1
      team = pickOrder[step] && pickOrder[step].team
    } else {
      timerClients.forEach(timerClient => timerClient.emit('time', null))
      reserve = {
        firstPick: reserveTime,
        team2: reserveTime
      }
      step = 0
      team = 'firstPick'
      clearInterval(timer)
    }
  })

  client.on('disconnect', () => {
    timerClients.splice(timerClients.indexOf(client), 1)
    if (timerClients.length < 1) {
      reserve = {
        firstPick: reserveTime,
        team2: reserveTime
      }
      step = 0
      team = 'firstPick'
      clearInterval(timer)
    }
  })
})

io.on('connection', client => {
  client.on('action', action => {
    client.broadcast.emit('action', {
      type: 'Picker/' + action.type.split('/')[1],
      payload: action.payload
    })
  })
})

server.listen(process.env.PORT || 4000)
