import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();
    const [pseudo, setPseudo] = useState("");
    const [roomID, setRoomID] = useState("");
    const [roomIDGenerated, setRoomIDGenerated] = useState(false);
    const [roomIDInput, setRoomIDInput] = useState(false);

    const handleStart = (e) => {
        e.preventDefault();
        // Stocker le pseudo dans le localStorage
        localStorage.setItem("credit", JSON.stringify({
            pseudo: pseudo,
            roomID: roomID,
        }));
        navigate("/game");
    };
    

    const generateRandomRoomID = () => {
        if (roomIDInput) {
            const randomID = Math.floor(1000 + Math.random() * 9000);
            setRoomID(randomID.toString());
            setRoomIDGenerated(true);
        }
    };

    const toggleRoomIDInput = () => {
        setRoomIDInput(!roomIDInput);
    };

    useEffect(() => {
        generateRandomRoomID();
    }, [roomIDInput]);

    return (
        <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="min-h-screen flex justify-center items-center">
                <form
                    onSubmit={handleStart}
                    className="space-y-4 w-full lg:w-96"
                >
                    <div className="w-full">
                        <label
                            htmlFor="pseudo"
                            className="block font-bold mb-2"
                        >
                            Pseudo
                        </label>
                        <input
                            type="text"
                            id="pseudo"
                            name="pseudo"
                            className="border border-bleu outline-none bg-transparent rounded-md w-full px-3 py-2"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="RoomID"
                            className="block font-bold mb-2"
                        >
                            RoomID
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="auto-generate-room-id"
                                    name="auto-generate-room-id"
                                    className="form-checkbox size-4 text-bleu"
                                    checked={roomIDInput}
                                    onChange={toggleRoomIDInput}
                                />
                                <label
                                    htmlFor="auto-generate-room-id"
                                    className="ml-2 block text-sm font-medium text-gray-900"
                                >
                                    Générer automatiquement
                                </label>
                            </div>
                        </label>
                        <input
                            type="text"
                            id="RoomID"
                            name="RoomID"
                            className="border border-bleu outline-none bg-transparent rounded-md w-full px-3 py-2"
                            value={roomID}
                            onChange={(e) => setRoomID(e.target.value)}
                            readOnly={roomIDInput}
                            required={!roomIDInput}
                        />
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            className="inline-block px-4 py-2 bg-bleu text-white font-bold rounded-md w-full"
                        >
                            Commencer
                        </button>
                    </div>
                </form>
            </div>
            <div className="min-h-screen bg-bleu"></div>
        </section>
    );
}

export default Home;
