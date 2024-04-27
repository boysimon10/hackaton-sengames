import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Home from "./Home";
import InterfaceGame from "./InterfaceGame";

function HomeRouter() {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="/game" element={<InterfaceGame/>} />
            </Route>
        </Routes>
    );
}

export default HomeRouter;
