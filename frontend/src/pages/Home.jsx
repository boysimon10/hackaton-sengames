import React, { useEffect, useState } from "react";

function Home({ waiting, setWaiting, socket }) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const [roomIDGenerated, setRoomIDGenerated] = useState(false);
    const [roomIDInput, setRoomIDInput] = useState(false);

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    const generateRandomRoomID = () => {
        if (roomIDInput) {
            const randomID = Math.floor(1000 + Math.random() * 9000);
            setRoom(randomID.toString());
            setRoomIDGenerated(true);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && room && !waiting) {
            clearLocalStorage()
            localStorage.setItem("credit", JSON.stringify({ name, room }));
            
            setWaiting(true);
            socket.emit("joinRoom", room, name);
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
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full lg:w-96"
                >
                    <div className="w-full">
                        <label htmlFor="name" className="block font-bold mb-2">
                            Pseudo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border border-bleu outline-none bg-transparent rounded-md w-full px-3 py-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            readOnly={waiting}
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
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            readOnly={waiting}
                            required={!roomIDInput}
                        />
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            disabled={waiting}
                            className={`inline-block px-4 py-2 bg-bleu text-white font-bold rounded-md w-full ${
                                waiting ? "animate-pulse" : ""
                            }`}
                        >
                            {waiting
                                ? "En attente d'un autre joueur..."
                                : "Commencer"}
                        </button>
                    </div>
                </form>
            </div>
            <div className="min-h-screen bg-bleu"></div>
        </section>
    );
}

export default Home;
