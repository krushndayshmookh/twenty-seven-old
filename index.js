var express = require('express')
var http = require('http')
var socketIO = require('socket.io')

var app = express()
var server = http.Server(app)
var io = socketIO(server);


var port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg)
    })



    socket.on('disconnect', function () {
        console.log('user disconnected');
    })
})

server.listen(port, () => {
    console.log('listening on *:' + port)
})