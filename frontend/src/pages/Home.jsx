import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [pseudo, setPseudo] = useState("");

    const handleStart = () => {
        // Stocker le pseudo dans le localStorage
        localStorage.setItem("pseudo", pseudo);
        navigate("/game");
    };

    const handleInputChange = (event) => {
        setPseudo(event.target.value);
    };
    return (
        <section className="min-h-screen relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            {/* image - start */}
            {/* <img
                src={process.env.PUBLIC_URL + "/images/bg.jpg"}
                alt="by Freepik"
                className="absolute inset-0 h-full w-full object-cover object-center"
            /> */}
            {/* image - end */}
            {/* overlay - start */}
            {/* <div className="absolute inset-0 bg-gris mix-blend-multiply" /> */}
            {/* overlay - end */}
            {/* text start */}
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl text-bleu">
                {/* <h1 className="mb-8 text-center text-2xl font-bold sm:text-3xl md:mb-12 md:text-5xl animate-pulse">
                    Bienvenue dans Atra
                </h1> */}
                <Fade top>
                    <div className="flex w-96 flex-row flex-wrap space-y-8 py-12 px-4 sm:flex-row sm:justify-center font-mont rounded-lg backdrop-blur-sm bg-bleu/20 shadow-md">
                        <div className="w-full">
                            <label
                                htmlFor="tel"
                                className="block font-bold mb-2"
                            >
                                Pseudo
                            </label>
                            <input
                                type="tel"
                                id="tel"
                                name="tel"
                                className="border border-bleu outline-none bg-transparent rounded-md w-full px-3 py-2"
                                value={pseudo}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <button
                                onClick={handleStart}
                                className="inline-block px-4 py-2 bg-bleu text-white font-bold rounded-md w-full"
                            >
                                Commencer
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* text end */}
        </section>
    );
}

export default Home;
