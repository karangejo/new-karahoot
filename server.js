const io = require('socket.io')();
const mongoose = require('mongoose');

// connect to the database and create it if it does not exist
mongoose.connect("mongodb://localhost:27017/tests", {useNewUrlParser: true, useUnifiedTopology: true});
//gameRoom object structured like this
//gameRoom[roomId].players.name to get the score
//gameRoom[roomId].players.
//gameRoom[roomId].currentAnswer to the the answer to the current question
/*const example = {
                  162534: {
                    players: {
                      name: score
                    },
                    currentAnswer: answer
                  }
                }
*/
//array to store game game rooms
var gameRooms = {};

io.on( 'connection', ( client ) => {

        client.on('createGameRoom', (obj) => {
          console.log( 'creating a new room with id: ' + obj.roomId );
            // create a room  save it and join this client to the room
            gameRooms[obj.roomId] = {players:{},timeLimit: obj.timeLimit};
            client.join(obj.roomId);
            // send a message back to reconfirm
            io.sockets.in(obj.roomId).emit("created","success");
        });

        client.on('joinRoom', (obj) => {
          console.log('joining user ' +obj.name + ' to room with id: ' + obj.roomId);
            // join the client to the room if it exists
            //if roomId in gameRoom
            if(gameRooms.hasOwnProperty(obj.roomId)){
              client.join(obj.roomId);
              gameRooms[obj.roomId].players[obj.name] = 0;
              io.sockets.in(obj.roomId).emit("newPlayer", obj.name);
              client.emit("sendTimeLimit", gameRooms[obj.roomId].timeLimit);
            } else {
              client.emit("noSuchRoom");
            }

        });

        client.on('sendQuestionAnswers',obj => {
          console.log('sending answer options to the connected clients of room: '+ obj.roomId);
            // send the options to the client for display
            gameRooms[obj.roomId].currentAnswer = obj.question.answer;
            console.log("GAME ROOMS");
            console.log(gameRooms);
            io.sockets.in(obj.roomId).emit("nextQuestion", obj.question);
        });

        client.on('pauseGame', (roomId) => {
          console.log('pausing game on clients of room: ' + roomId);
          // pause game in players
          io.sockets.in(roomId).emit("pauseGame");
          client.emit("sendPlayerScores",gameRooms[roomId].players)
        });

        // not used at the moment
        client.on('sendAnswer', (roomId) => {
          console.log('sending answer to the current question in room: ' + roomId);
          //send the answer and check if it is correct
        });

        // **********************
        //(((((((((((((((((())))))))))))))))))
        //*******************
        // this needs work
        client.on("playerSendScore", (obj) => {
          console.log("received score of " + obj.score + ' from player ' + obj.name);
          gameRooms[obj.roomId].players[obj.name] = obj.score;

        })

        client.on("playerAnswer", (obj) => {
          console.log("player ANSWER");
          console.log(obj);
          console.log('sending answer to question for player ' + obj.name+ ' in room: ' + obj.roomId);
          if(obj.answer == gameRooms[obj.roomId].currentAnswer){
            client.emit("correctAnswer", obj.score);
          } else {
            client.emit("wrongAnswer", obj.score);
          }
        });


        client.on("finishedGame", (roomId) => {
          console.log("finished game on room: " + roomId);
          delete gameRooms[roomId];
          io.sockets.in(roomId).emit("finishedGame");
        })

});


const port = 8003;

io.listen( port );

console.log( 'listening on port', port );
