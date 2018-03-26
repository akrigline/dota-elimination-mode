
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

const reserveTime = 1
const timePerTurn = 1

const rooms = {

}

io.on('connection', client => {
  let clientRoom

  client.on('join', (room) => {
    client.join(room, () => { // This only joins the room for this namespace.
      clientRoom = Object.keys(client.rooms)[1]
      if (!rooms[clientRoom]) {
        rooms[clientRoom] = {
          step: 0,
          reserve: {
            firstPick: reserveTime,
            team2: reserveTime
          },
          team: 'firstPick',
          time: null,
          timer: null
        }
      }
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
    rooms[clientRoom].time = timePerTurn
    rooms[clientRoom].step = rooms[clientRoom].step + 1

    rooms[clientRoom].timer = setInterval(() => {
      const clientsInRoom = io.sockets.adapter.rooms[clientRoom] && Object.keys(io.sockets.adapter.rooms[clientRoom].sockets).filter(key => io.sockets.adapter.rooms[clientRoom].sockets[key])
      const time = rooms[clientRoom].time
      const step = rooms[clientRoom].step
      const reserve = rooms[clientRoom].reserve
      const team = rooms[clientRoom].team

      if (time >= 0) {
        io.to(clientRoom).emit('time', {
          countdown: time,
          reserve: reserve
        })
        rooms[clientRoom].time = time - 1
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

          rooms[clientRoom].time = timePerTurn
          rooms[clientRoom].step = step + 1
          rooms[clientRoom].team = pickOrder[step] && pickOrder[step].team
        } else if (step === 22) {
          pickOrder[step] && io.to(clientsInRoom[0]).emit('random', pickOrder[step].team)
          io.to(clientRoom).emit('time', null)
          rooms[clientRoom].reserve = {
            firstPick: reserveTime,
            team2: reserveTime
          }
          rooms[clientRoom].step = 0
          rooms[clientRoom].team = 'firstPick'
          clearInterval(rooms[clientRoom].timer)
        } else {
          io.to(clientRoom).emit('time', null)
          rooms[clientRoom].reserve = {
            firstPick: reserveTime,
            team2: reserveTime
          }
          rooms[clientRoom].step = 0
          rooms[clientRoom].team = 'firstPick'
          clearInterval(rooms[clientRoom].timer)
        }
      }
    }, 1000)
  })

  client.on('pick', () => {
    if (rooms[clientRoom].step < 22) {
      rooms[clientRoom].time = timePerTurn
      rooms[clientRoom].step = rooms[clientRoom].step + 1
      rooms[clientRoom].team = pickOrder[rooms[clientRoom].step] && pickOrder[rooms[clientRoom].step].team
    } else {
      clearInterval(rooms[clientRoom].timer)
      io.to(clientRoom).emit('time', null)
      rooms[clientRoom].reserve = {
        firstPick: reserveTime,
        team2: reserveTime
      }
      rooms[clientRoom].step = 0
      rooms[clientRoom].team = 'firstPick'
    }
  })

  client.on('disconnect', () => {
    io.of('/').in(clientRoom).clients((error, clients) => {
      if (error) {
        console.log('error in clientsInRoom', error)
        return []
      } else {
        if (clients.length < 1) {
          clearInterval(rooms[clientRoom].timer)
          delete rooms[clientRoom]
        }
      }
    })
  })
})

server.listen(process.env.PORT || 4000)
