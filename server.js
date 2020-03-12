const io = require('socket.io')();
//const mongoose = require('mongoose');

// connect to the database and create it if it does not exist
mongoose.connect("mongodb://localhost:27017/tests", {useNewUrlParser: true});

//array to store game game rooms
var gameRooms = [];

io.on( 'connection', ( client ) => {

        client.on('createGameRoom', (roomId) => {
          console.log( 'creating a new room with id: ' + roomId );
            // create a room  save it and join this client to the room
        });

        client.on('joinRoom', (roomId) => {
          console.log('joining user to room with id: ' + roomId);
            // join the client to the room if it exists
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


const port = 8000;

io.listen( port );

console.log( 'listening on port', port );
