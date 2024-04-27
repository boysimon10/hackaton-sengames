import React, { useState, useEffect } from "react";
import { BsFuelPump } from "react-icons/bs";

function Essence({ essence }) {
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
        let proportion = 0;
        if (essence !== 0) {
            proportion = (3 - essence) * 10; // Calculer la proportion de la réduction de progress
        } else {
            proportion = progress;
        }
        const newProgress = Math.max(0, progress - proportion); // Calculer le nouveau progress en fonction du niveau d'essence
        setProgress(newProgress); // Mettre à jour la barre de progression
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
                {progress !== 0 && (
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
