import React, { useEffect, useState } from "react";
import Paysage from "./Paysage";

function EcranJeu({ start, scores, essence }) {
    const [positionUn, setPositionUn] = useState(0);
    const [positionDeux, setPositionDeux] = useState(0);

    useEffect(() => {
        if (start && scores.length > 0) {
            const scoreJoueurUn = Math.min(Math.max(0, scores[0].score), 5);
            const scoreJoueurDeux = Math.min(Math.max(0, scores[1].score), 5);

            if (essence === 0) {
                // Si l'essence est égale à zéro, on met le joueur avec le score le plus élevé à 100
                if (scoreJoueurUn > scoreJoueurDeux) {
                    setPositionUn(100);
                    setPositionDeux(50);
                } else {
                    setPositionUn(50);
                    setPositionDeux(100);
                }
            } else {
                // Sinon, on positionne les véhicules en fonction de leurs scores respectifs
                const distanceUn =( scoreJoueurUn * 20) + 10; // Déplacement en pourcentage pour le joueur un
                const distanceDeux = (scoreJoueurDeux * 20) + 10; // Déplacement en pourcentage pour le joueur deux
                setPositionUn(distanceUn);
                setPositionDeux(distanceDeux);
            }
        } else {
            // Si le jeu n'a pas démarré ou s'il n'y a pas de scores, réinitialiser les positions
            setPositionUn(0);
            setPositionDeux(0);
        }
    }, [start, scores, essence]);

    return (
        <div className="border border-gray-500 rounded w-full max-h-128 overflow-hidden flex flex-col">
            <Paysage start={start} />
            <div className="w-full bg-gris min-h-36 py-4 flex flex-col justify-center relative">
                <div
                    style={{ transform: `translateX(${positionUn}%)` }}
                    className={`absolute -top-8`}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/car1.png"}
                        alt="car1"
                        className="w-44"
                    />
                </div>
                <div className="p-0.5 w-full bg-white"></div>
                <div
                    style={{ transform: `translateX(${positionDeux}%)` }}
                    className={`absolute bottom-4`}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/car2.png"}
                        alt="car1"
                        className="w-44"
                    />
                </div>
            </div>
        </div>
    );
}

export default EcranJeu;
