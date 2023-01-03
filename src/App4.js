import React from "react";
import Navbar from "./gourmet_catering/Navbar";
import Footer from "./gourmet_catering/Footer";
import Main from "./gourmet_catering/Main";
import MainList from "./gourmet_catering/MainList";

function App4() {
    return (
        <div>
            <Navbar />
            <Main />

            <div className={"my-2"}>
                <MainList />
            </div>

            <Footer />
        </div>
    );
}

export default App4;