import React, { useState } from "react";
import Essence from "../components/Essence";
import Avatar from "../components/Avatar";
import EcranJeu from "../components/EcranJeu";
import Questionnaire from "../components/Questionnaire";

function InterfaceGame() {
    const [essence, setEssence] = useState(3);

    return (
        <div className="py-8 container mx-auto">
            <div className="w-full flex items-center justify-between px-4 mb-8">
                <Essence essence={essence} />
                <Avatar />
            </div>
            <EcranJeu/>
            <Questionnaire/>
        </div>
    );
}

export default InterfaceGame;
