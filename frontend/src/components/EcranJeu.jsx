import React, { useEffect, useState } from "react";
import Paysage from "./Paysage";

function EcranJeu({ start, reponse1, reponse2 }) {
    const [positionUn, setPositionUn] = useState(0);
    const [positionDeux, setPositionDeux] = useState(0);
    start = false;
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setPositionUn((prevPosition) => prevPosition + 1);
                setPositionDeux((prevPosition) => prevPosition + 1);
            }, 50);
            return () => clearInterval(interval);
        }
    }, [start]);
    return (
        <div className="border border-gray-500 rounded w-full max-h-128 overflow-hidden flex flex-col  ">
            <Paysage start={start} />
            <div className="w-full bg-gris min- h-36 py-4  flex flex-col justify-center relative">
                <div
                    style={{ transform: `translateX(${positionUn}px)` }}
                    className={`" absolute -top-8 "`}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/car1.png"}
                        alt="car1"
                        className=" w-44"
                    />
                </div>
                <div className="p-0.5 w-full bg-white"></div>
                <div
                    style={{ transform: `translateX(${positionDeux}px)` }}
                    className={` absolute bottom-4 right-[${positionDeux}]`}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/car2.png"}
                        alt="car1"
                        className=" w-44"
                    />
                </div>
            </div>
        </div>
    );
}

export default EcranJeu;
