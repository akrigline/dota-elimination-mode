const io = require('socket.io')()

let connections = []

io.on('connection', client => {
  connections.push(client)
  client.on('action', action => {
    if (action.type === 'server/SUBSCRIBE_TO_TIMER') {
      console.log('got subscribeToTimer')
      setInterval(() => {
        connections.forEach(client => client.emit(
          'action',
          {
            type: 'BasicReducer/SET_TIMER',
            payload: new Date()
          }
        ))
      }, 1000)
    }
    if (action.type === 'server/INCREMENT') {
      console.log('got increment')
      connections.forEach(client => client.emit('action', {type: 'BasicReducer/INCREMENT', payload: action.payload}))
    }
    if (action.type === 'server/DECREMENT') {
      console.log('got decrement')
      connections.forEach(client => client.emit('action', {type: 'BasicReducer/DECREMENT', payload: action.payload}))
    }
    if (action.type === 'server/PICK') {
      console.log('got pick')
      connections.forEach(client => client.emit('action', {
        type: 'Picker/PICK',
        payload: action.payload
      }))
    }
  })

  client.on('disconnect', () => {
    const index = connections.indexOf(client)
    console.log('disconnected')
    connections.splice(index, 1)
  })
  // start emitting events
})

const port = 8000
io.listen(port)
console.log('listening on port ', port)
