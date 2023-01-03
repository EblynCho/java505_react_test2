import React from "react";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";

const styles = {
    mainList: {
        width: 1200,
        margin: "auto",
    },
}

function MainList() {
    return (
        <div className={"mt-5"} style={styles.mainList}>
            <About />
            <hr/>
            <Menu />
            <hr/>
            <Contact />
        </div>
    );
}

export default MainList;