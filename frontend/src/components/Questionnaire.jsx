import React, { useState, useEffect } from "react";

function Questionnaire({ question, options, socket, answered, setAnswered }) {
    
    const [credit, setCredit] = useState(
        JSON.parse(localStorage.getItem("credit")) || { pseudo: "", roomID: "" }
    );

    useEffect(() => {
        // Récupérer le crédit du localStorage lors du chargement du composant
        const storedCredit = localStorage.getItem("credit");
        if (storedCredit) {
            setCredit(JSON.parse(storedCredit));
        }
    }, []);

    const handleAnswer = (answerIndex) => {
        console.log(answerIndex);
        if (!answered) {
            socket.emit("submitAnswer", credit.room, answerIndex);
            setAnswered(true);
        }
    };
    
    return (
        <div className="min-h-96 ">
            <div className="flex flex-col items-center py-8">
                <h1 className="text-2xl font-bold text-gris">{question}</h1>
                <div className="flex flex-wrap gap-10 items-center justify-around mt-8">
                    {options.map((reponse, index) => (
                        <div
                            key={index}
                            onClick={() => handleAnswer(index)} // Utilisez une fonction fléchée ici
                            className="text-xl font-semibold border border-gris px-8 py-2 rounded-full min-w-32 text-center shadow-lg cursor-pointer hover:bg-bleu hover:text-white hover:border-bleu"
                        >
                            {reponse}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Questionnaire;
