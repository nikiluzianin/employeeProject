import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Root = (loggedIn) => {



    return (
        <div>
            <Header loggedIn={loggedIn} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Root