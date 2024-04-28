import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <section className="h-screen w-full container px-24 mx-auto overflow-hidden font-mont">
            <Outlet />
        </section>
    );
}

export default HomeLayout;
