const request = require('supertest')
const io = require('socket.io-client')
const app = require('../app.js')

describe('/post subscription', () => {
  const userInformation = {
    username: 'admin',
    password: 'password',
  }
  test('Check the status code and the message', async () => {
    await request(app)
      .post('/subscription')
      .send(userInformation)
      .set('Accept', 'application/json')
      .expect(200)
  })
})