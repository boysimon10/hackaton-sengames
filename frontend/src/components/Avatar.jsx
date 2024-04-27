import React, { useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa6";

function Avatar() {
    const [pseudo, setPseudo] = useState(localStorage.getItem("pseudo") | "");

    useEffect(() => {
        // Récupérer le pseudo du localStorage lors du chargement du composant
        const storedPseudo = localStorage.getItem("pseudo");
        if (storedPseudo) {
            setPseudo(storedPseudo);
        }
    }, []);
    return (
        <div className="flex items-center space-x-2">
            <div className="border rounded-full p-2 ">
                <FaUserAstronaut className="text-gris text-2xl " />
            </div>
            <div>{pseudo}</div>
        </div>
    );
}

export default Avatar;
