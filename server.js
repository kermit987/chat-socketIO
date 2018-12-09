const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(8888)
// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
  console.log('User has been connected to general channel')
})

app.post('/login', (req, res) => {

})

app.post('/subscription', (req, res) => {

})

io.on('connection', function (socket) {
  socket.on('my other event', function (data) {
    console.log(data)
  })
})