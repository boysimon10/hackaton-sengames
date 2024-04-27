import React, { useState } from "react";

function Questionnaire() {
    const [select, setSelect] = useState(null);

    const test = [
        {
            question: "Quelle est la capitale de Dakar ?",
            BonneResponse: "Dakar",
            Reponses: ["Saint-Louis", "Dakar", "Ziguinchor"],
        },
    ];
    return (
        <div className="min-h-96 ">
            {test.map((item, index) => (
                <div className="flex flex-col items-center py-8" key={index}>
                    <h1 className="text-2xl font-bold text-gris">
                        {item.question}
                    </h1>
                    <div className="flex flex-wrap gap-10 items-center justify-around mt-8">
                        {item.Reponses.map((reponse, index) => (
                            <div
                                key={index}
                                onClick={()=> setSelect(index)}
                                className="text-xl font-semibold border border-gris px-8 py-2 rounded-full min-w-32 text-center shadow-lg cursor-pointer hover:bg-bleu hover:text-white hover:border-bleu"
                            >
                                {reponse}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Questionnaire;
