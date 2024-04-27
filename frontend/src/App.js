import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "./pages/HomeRouter";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<HomeRouter />} />
        </Routes>
    );
}

export default App;
