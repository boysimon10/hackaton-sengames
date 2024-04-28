import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import io from "socket.io-client";

const socket = io("ws://localhost:5000");

function Home() {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && room && !waiting) {
            setWaiting(true);
            socket.emit("joinRoom", room, name);
        }
    };

    const handleAnswer = (answerIndex) => {
        if (!answered) {
            socket.emit("submitAnswer", room, answerIndex);
            setAnswered(true);
        }
    };

    if (winner) {
        return <h1>Winner is {winner}</h1>;
    }

    return (
        <div className="App">
            {!info ? (
                <div className="join-div">
                    <h1>Quiz Game</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            required
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            required
                            placeholder="Enter room number"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                        />
                        <button type="submit" className="join-btn" disabled={waiting}>
                            {waiting ? "Waiting for opponent..." : "JOIN"}
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1>Quiz Game</h1>
                    <ToastContainer />
                    {question ? (
                        <div className="quiz-div">
                            <p>Remaining Time: {seconds}</p>
                            <p className="question">{question}</p>
                            <ul>
                                {options &&
                                    options.map((option, index) => (
                                        <li key={index}>
                                            <button
                                                className="option"
                                                onClick={() => handleAnswer(index)}
                                                disabled={answered}
                                            >
                                                {option}
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                            <div className="scores">
                                {scores &&
                                    scores.map((score, index) => (
                                        <p key={index}>
                                            {score.name}: {score.score}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    ) : (
                        <p className=" animate-pulse">Loading question...</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home; 