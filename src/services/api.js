import openSocket from 'socket.io-client'
const socket = openSocket('/')

/**
 * Subscribes the Client to the /update socket
 * connection to tell the server that it needs
 * to update us on current state.
 * @param {any} cb - Callback after 'updateMe' has been received from the server
 */
export const subscribeToUpdate = (cb) => {
  socket.on('updateMe', () => cb(null))
}

export const joinRoom = (room) => {
  socket.emit('join', room)
}

export const subscribeToTime = (cb) => {
  socket.on('time', (time) => cb(null, time))
}

export const startTimer = () => {
  socket.emit('start')
}

export const triggerReset = () => {
  socket.emit('pick')
}

export const subscribeToRandom = (cb) => {
  socket.on('random', (team) => cb(null, team))
}

export default socket
