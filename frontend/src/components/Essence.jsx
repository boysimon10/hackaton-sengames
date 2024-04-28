import React, { useState, useEffect } from "react";
import { BsFuelPump } from "react-icons/bs";

function Essence({ essence, start }) {
    const [progress, setProgress] = useState(100); // Initialiser la barre de progression à 100%

    // Mettre à jour la barre de progression à intervalles réguliers
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Diminuer progress lentement en fonction du temps
            setProgress((prevProgress) => Math.max(0, prevProgress - 0.5));
        }, 1000); // Mettre à jour toutes les secondes

        return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
    }, []);

    // Mettre à jour la barre de progression plus rapidement si le niveau d'essence change
    useEffect(() => {
        let progress =100;
        const essenceProgress = () => {
            progress = progress - 20;
        }
        essenceProgress()
    }, [essence]);
    

    return (
        <div className="flex items-center p-4">
            <div className="mr-2">
                <BsFuelPump className="text-gris" />
            </div>
            <div
                className={`w-96 h-4 rounded-md relative ${
                    progress === 0
                        ? "bg-red-50 border-red-500 border"
                        : "bg-green-50 border-green-500 border"
                }`}
            >
                {progress !== 0  && start &&(
                    <div
                        className="h-full bg-green-500 rounded-md"
                        style={{ width: `${progress}%` }}
                    ></div>
                )}
            </div>
        </div>
    );
}

export default Essence;
