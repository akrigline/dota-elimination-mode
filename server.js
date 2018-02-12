
const express = require('express')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, 'build', 'index.html'))
})

io.of('/update').on('connect', (client) => {
  console.log('connected')
  client.broadcast.emit('updateMe', null)
})

io.on('connection', client => {
  client.on('action', action => {
    console.log('action received of type ', action.type)
    client.broadcast.emit('action', {
      type: 'Picker/' + action.type.split('/')[1],
      payload: action.payload
    })
  })
})

server.listen(4000)
