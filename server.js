
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

const reserveTime = 130
const timePerTurn = 30

io.on('connection', client => {
  let clientRoom
  let step = 0
  let reserve = {
    firstPick: reserveTime,
    team2: reserveTime
  }
  let team = 'firstPick'
  let time

  let timer

  client.on('join', (room) => {
    client.join(room, () => { // This only joins the room for this namespace.
      clientRoom = Object.keys(client.rooms)[1]
      client.to(clientRoom).emit('updateMe', null)
    })
  })

  client.on('action', (action) => {
    client.to(clientRoom).emit('action', {
      type: 'Picker/' + action.type.split('/')[1],
      payload: action.payload
    })
  })

  client.on('start', () => {
    time = timePerTurn
    step = step + 1

    timer = setInterval(() => {
      const clientsInRoom = io.of('/').in(clientRoom).clients((error, clients) => {
        if (error) {
          console.log('error in clientsInRoom', error)
          return []
        } else {
          return clients
        }
      })
      if (time >= 0) {
        io.to(clientRoom).emit('time', {
          countdown: time,
          reserve: reserve
        })
        time = time - 1
      }

      if (time === -1 && reserve[team] >= 0) {
        io.to(clientRoom).emit('time', {
          countdown: reserve[team],
          reserve: reserve
        })
        reserve[team] = reserve[team] - 1
      }

      if (time < 0 && reserve[team] < 0) {
        if (step < 22) {
          pickOrder[step] && io.to(clientsInRoom[0]).emit('random', pickOrder[step].team)

          time = timePerTurn
          step = step + 1
          team = pickOrder[step] && pickOrder[step].team
        } else if (step === 22) {
          pickOrder[step] && io.to(clientsInRoom[0]).emit('random', pickOrder[step].team)
          io.to(clientRoom).emit('time', null)
          reserve = {
            firstPick: reserveTime,
            team2: reserveTime
          }
          step = 0
          team = 'firstPick'
          clearInterval(timer)
        } else {
          io.to(clientRoom).emit('time', null)
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
      io.to(clientRoom).emit('time', null)
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
    io.of('/').in(clientRoom).clients((error, clients) => {
      if (error) {
        console.log('error in clientsInRoom', error)
        return []
      } else {
        if (clients.length < 1) {
          clearInterval(timer)
        }
      }
    })
  })
})

server.listen(process.env.PORT || 4000)
