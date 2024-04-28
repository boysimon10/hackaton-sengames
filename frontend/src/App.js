import React, { useState, useEffect } from "react";

import io from "socket.io-client";
import Home from "./pages/Home";
import InterfaceGame from "./pages/InterfaceGame";

const socket = io("ws://localhost:5000");

function App() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [info, setInfo] = useState(false);
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answered, setAnswered] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [scores, setScores] = useState([]);
    const [winner, setWinner] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [start, setStart] = useState(false);

    useEffect(() => {
        socket.on("startGame", () => {
            setInfo(true);
            setWaiting(false);
        });

        socket.on("newQuestion", (data) => {
            setQuestion(data.question);
            setOptions(data.options);
            setAnswered(false);
            setSeconds(data.timer);
            setScores(data.scores);
        });

        socket.on("gameOver", (data) => {
            setWinner(data);
        });

        socket.on("updateScore", (updatedScores) => {
            setScores(updatedScores);
        });

        return () => {
            socket.off("startGame");
            socket.off("newQuestion");
            socket.off("gameOver");
            socket.off("updateScore");
        };
    }, []);

    const handleAnswer = (answerIndex) => {
        if (!answered) {
            socket.emit("submitAnswer", room, answerIndex);
            setAnswered(true);
        }
    };

    const handleRestartGame = () => {
        socket.emit("restartGame", room);
        setWinner("");
    };

    if (winner) {
        return (
            <div className="h-screen flex justify-center items-center">
            {winner === "Match nul" ? (
                <h1 className="z-10 text-4xl font-bold text-center text-bleu">
                    {winner}
                </h1>
            ) : (
                <h1 className="z-10 text-4xl font-bold text-center text-bleu">
                    {winner} a gagné!
                </h1>
            )}
        </div>
        
        );
    }
    return (
        <div className="App">
            {!info ? (
                <Home
                    setWaiting={setWaiting}
                    waiting={waiting}
                    socket={socket}
                />
            ) : (
                <InterfaceGame
                    question={question}
                    options={options}
                    seconds={seconds}
                    scores={scores}
                    answered={answered}
                    setAnswered={setAnswered}
                    handleAnswer={handleAnswer}
                    socket={socket}
                    start={start}
                    setStart={setStart}
                />
            )}
        </div>
    );
}

export default App;
