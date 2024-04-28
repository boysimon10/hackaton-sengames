import React, { useEffect, useState } from "react";
import Essence from "../components/Essence";
import Avatar from "../components/Avatar";
import EcranJeu from "../components/EcranJeu";
//import Questionnaire from "../components/Questionnaire";
import Feu from "../components/Feu";

function InterfaceGame({
    question,
    options,
    seconds,
    scores,
    answered,
    socket,
    setAnswered,
    start,
    setStart
}) {
    const [essence, setEssence ] = useState(5)
    const [credit, setCredit] = useState(
        JSON.parse(localStorage.getItem("credit")) || { name: "", room: "" }
    );
    
    useEffect(() => {
        // Récupérer le crédit du localStorage lors du chargement du composant
        const storedCredit = localStorage.getItem("credit");
        if (storedCredit) {
            setCredit(JSON.parse(storedCredit));
        }
    }, []);

    const handleAnswer = (answerIndex) => {
        if (!answered) {
            socket.emit("submitAnswer", credit.room, answerIndex);
            setAnswered(true);
            setEssence((prevPosition) => prevPosition - 1)
        }
    };

    return (
        <div className="py-8 container px-24 mx-auto">
            <div className="w-full flex items-center justify-between px-4 mb-8">
                <Essence essence={essence}  start={start}/>
                <Feu  setStart={setStart} />
                <Avatar />
            </div>
            <EcranJeu start={start} scores={scores}/>
            <div className={start ? "min-h-96 " : "hidden" }>
                <div className="flex flex-col items-center py-8">
                    <h1 className="text-2xl font-bold text-gris">{question}</h1>
                    <div className="flex flex-wrap gap-10 items-center justify-around mt-8">
                        {options.map((reponse, index) => (
                            <button
                                key={index}
                                disabled={answered}
                                onClick={() => handleAnswer(index)} // Utilisez une fonction fléchée ici
                                className="text-xl font-semibold border border-gris px-8 py-2 rounded-full min-w-32 text-center shadow-lg cursor-pointer hover:bg-bleu hover:text-white hover:border-bleu"
                            >
                                {reponse}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterfaceGame;
