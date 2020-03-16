const io = require('socket.io')();
const mongoose = require('mongoose');

// connect to the database and create it if it does not exist
mongoose.connect("mongodb://localhost:27017/tests", {useNewUrlParser: true, useUnifiedTopology: true});

//array to store game game rooms
var gameRooms = [];

io.on( 'connection', ( client ) => {

        client.on('createGameRoom', (roomId) => {
          console.log( 'creating a new room with id: ' + roomId );
            // create a room  save it and join this client to the room
            gameRooms.push(roomId);
            client.join(roomId);
            // send a message back to reconfirm
            io.sockets.in(roomId).emit("created","success");
        });

        client.on('joinRoom', (obj) => {
          console.log('joining user' +obj.name + 'to room with id: ' + obj.roomId);
            // join the client to the room if it exists
            //if roomId in gameRooms
            client.join(obj.roomId);
            io.sockets.in(obj.roomId).emit("newPlayer", obj.name);
        });

        client.on('sendQuestionAnswers',(answers, roomId) => {
          console.log('sending answer options to the connected clients of room: '+ roomId);
            // send the options to the client for display
        });

        client.on('pauseGame', (roomId) => {
          console.log('pausing game on clients of room: ' + roomId);
        });

        client.on('sendAnswer', (roomId) => {
          console.log('sending answer to the current question in room: ' + roomId);
          //send the answer and check if it is correct
        });

});


const port = 8003;

io.listen( port );

console.log( 'listening on port', port );
