import React, { useState } from "react";
import Essence from "../components/Essence";
import Avatar from "../components/Avatar";
import EcranJeu from "../components/EcranJeu";
import Questionnaire from "../components/Questionnaire";
import Feu from "../components/Feu";

function InterfaceGame() {
    const [essence, setEssence] = useState(3);
    const [start, setStart] = useState(false);
    return (
        <div className="py-8 container px-24 mx-auto">
            <div className="w-full flex items-center justify-between px-4 mb-8">
                <Essence essence={essence} />
                <Feu />
                <Avatar />
            </div>
            <EcranJeu />
            <Questionnaire />
        </div>
    );
}

export default InterfaceGame;
