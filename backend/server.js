const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const questions = require('./questions');

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

let players = [];
let rooms = {};

io.on('connection', (socket) => {
    console.log('New connection: ', socket.id);

    socket.on('joinRoom', (room, name) => {
        if (!rooms[room]) {
            rooms[room] = [socket.id];
        } else if (rooms[room].length < 2) {
            rooms[room].push(socket.id);
        } else {
            socket.emit('roomFull');
            return;
        }

        players.push({
            id: socket.id,
            username: name,
            score: 0,
            currentPosition: 0,
            room
        });

        socket.join(room);

        if (rooms[room].length === 2) {
            startGame(room);
        }
    });

    function startGame(room) {
        const roomPlayers = players.filter(player => player.room === room);
        if (roomPlayers.length === 2) {
            io.to(room).emit('startGame');
            sendQuestion(room);
        }
    }

    function sendQuestion(room) {
        const roomPlayers = players.filter(player => player.room === room);
        const currentQuestionIndex = rooms[room].currentQuestionIndex || 0;

        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];

            io.to(room).emit('newQuestion', {
                question: currentQuestion.question,
                options: currentQuestion.options,
                answer: currentQuestion.answer,
                timer: 10,
                scores: players.map(player => ({
                    name: player.username,
                    score: player.score
                }))
            });

            rooms[room].currentQuestionIndex = currentQuestionIndex + 1;
        } else {
            const winner = roomPlayers.reduce((prev, current) => (prev.score > current.score) ? prev : current);
            io.to(room).emit('gameOver', winner.username);
        }
    }

    socket.on('submitAnswer', (room, answerIndex) => {
        const currentPlayer = players.find(player => player.id === socket.id && player.room === room);
        const currentQuestionIndex = rooms[room].currentQuestionIndex - 1;
        const currentQuestion = questions[currentQuestionIndex];
        const roomPlayers = players.filter(player => player.room === room);
    
        if (!currentPlayer.answered && currentQuestionIndex < questions.length) {
            currentPlayer.answered = true;
    
            if (answerIndex === currentQuestion.options.indexOf(currentQuestion.answer)) {
                currentPlayer.score += 1;
            } else {
                // Remove the score decrement logic here
                // currentPlayer.score -= 1;
                const nextPlayer = roomPlayers.find(player => !player.answered);
                if (nextPlayer) {
                    io.to(nextPlayer.id).emit('yourTurn');
                }
            }
    
            const allAnswered = roomPlayers.every(player => player.answered);
            if (allAnswered || currentQuestionIndex >= questions.length - 1) {
                sendQuestion(room);
                roomPlayers.forEach(player => player.answered = false);
            }
        }
    });    

    socket.on('disconnect', () => {
        console.log('Disconnected: ', socket.id);
        players = players.filter(player => player.id !== socket.id);
        for (let room in rooms) {
            rooms[room] = rooms[room].filter(id => id !== socket.id);
            if (rooms[room].length === 0) {
                delete rooms[room];
            }
        }
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
