import openSocket from 'socket.io-client'
const updateSocket = openSocket('/update')
const timeSocket = openSocket('/timer')

/**
 * Subscribes the Client to the /update socket
 * connection to tell the server that it needs
 * to update us on current state.
 * @param {any} cb - Callback after 'updateMe' has been received from the server
 */
export const subscribeToUpdate = (cb) => {
  updateSocket.on('updateMe', () => cb(null))
}

export const subscribeToTime = (cb) => {
  timeSocket.on('time', (time) => cb(null, time))
}

export const startTimer = () => {
  console.log('start timer', timeSocket)
  timeSocket.emit('start')
}

export const triggerReset = () => {
  timeSocket.emit('pick')
}

export const subscribeToRandom = (cb) => {
  timeSocket.on('random', (team) => cb(null, team))
}
