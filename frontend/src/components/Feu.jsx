import React, { useState, useEffect } from "react";

function Feu() {
    const [countdown, setCountdown] = useState(3);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                setTimeout(() => {
                    setHide(true);
                }, 500); // 500 millisecondes de délai avant de réinitialiser le feu
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);

    if (hide) {
        return null;
    }

    return (
        <div className="flex w-46 p-2 rounded-full bg-gris">
            <div className="flex justify-between space-x-2 w-full">
                <div
                    className={`w-10 h-10 rounded-full ${
                        countdown === 2 ? "bg-red-500" : "bg-red-300"
                    }`}
                />
                <div
                    className={`w-10 h-10 rounded-full ${
                        countdown === 1 ? "bg-yellow-300" : "bg-yellow-200"
                    }`}
                />
                <div
                    className={`w-10 h-10 rounded-full ${
                        countdown === 0 ? "bg-green-500" : "bg-green-300"
                    }`}
                />
            </div>
        </div>
    );
}

export default Feu;
