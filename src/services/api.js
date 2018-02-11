import openSocket from 'socket.io-client'
const socket = openSocket('/update')

/**
 * Subscribes the Client to the /update socket
 * connection to tell the server that it needs
 * to update us on current state.
 * @param {any} cb - Callback after 'updateMe' has been received from the server
 */
export const subscribeToUpdate = (cb) => {
  socket.on('updateMe', () => cb(null))
}
