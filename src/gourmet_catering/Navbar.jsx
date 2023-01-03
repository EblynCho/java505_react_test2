import React from "react";

const styles = {
    navBar: {
        boxShadow: "0 4 4 -4 black"
    },
}

function Navbar() {
    return (
        <nav className={"navbar navbar-expand-sm navbar-white bg-white fixed-top"}>
            <div className={"container-fluid mx-3"}>
                <a href="#" className={"navbar-brand"}>Gourmet au Catering</a>
                {/*<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}

                <div className={"justify-content-end"} id="navBar">
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}>
                            <a href="#" className={"nav-link"}>About</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href="#" className={"nav-link"}>Menu</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href="#" className={"nav-link"}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;