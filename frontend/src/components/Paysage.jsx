import React, { useState, useEffect } from "react";

const Landscape = ({ start }) => {
    
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setPosition((prevPosition) => prevPosition + 1);
            }, 50);
            return () => clearInterval(interval);
        }

    }, [start]);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full w-full flex transition-transform"
                style={{ transform: `translateX(${-position}px)` }}
            >
                <img
                    src={process.env.PUBLIC_URL +"./images/paysage.png"}
                    alt="Landscape 1"
                    className="h-full w-full"
                />
                <img
                    src={process.env.PUBLIC_URL + "./images/paysage.png"}
                    alt="Landscape 2"
                    className="h-full w-full -ml-8"
                />
                <img
                    src={process.env.PUBLIC_URL + "./images/paysage.png"}
                    alt="Landscape 2"
                    className="h-full w-full -ml-8"
                />
            </div>
        </div>
    );
};

export default Landscape;
