import React, { useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";

function Avatar() {
    const [credit, setCredit] = useState(JSON.parse(localStorage.getItem("credit")) || { pseudo: "", roomID: "" });

    useEffect(() => {
        // Récupérer le crédit du localStorage lors du chargement du composant
        const storedCredit = localStorage.getItem("credit");
        if (storedCredit) {
            setCredit(JSON.parse(storedCredit));
        }
    }, []);

    return (
        <div className="flex items-center space-x-2">
            <div className="flex items-center">
                <div className="border rounded-full p-2 ">
                    <FaUserAstronaut className="text-gris text-2xl " />
                </div>
                <div>{credit.name}</div>
            </div>
            <div className="flex items-center">
                <div className="border rounded-full p-2 ">
                    <FaGamepad className="text-gris text-2xl " />
                </div>
                <div>#{credit.room}</div>
            </div>
        </div>
    );
}

export default Avatar;
