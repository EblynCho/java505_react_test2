import React from "react";

import {Outlet, Link} from "react-router-dom";

const styles = {
    link: {
        textDecoration: 'none',
        color: 'white',
        padding: 40,
        fontSize: 17
    }

};

function Navigate(props) {
    return (
        <div>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
                <div className={"container-fluid my-1"}>
                    <ul className={"navbar-nav mx-auto"}>
                        <li className={"nav-item"}>
                            {/*<a className={"nav-link active"} href={"#"}>Active</a>*/}
                            <Link to={"/"} style={styles.link}>Main</Link>
                        </li>
                        <li className={"nav-item"}>
                            {/*<a className={"nav-link"} href={"#"}>Link</a>*/}
                            <Link to={"/board"} style={styles.link}>Board</Link>
                        </li>
                        <li className={"nav-item"}>
                            {/*<a className={"nav-link"} href={"#"}>Link</a>*/}
                            <Link to={"/about"} style={styles.link}>About</Link>
                        </li>
                        {/*<li className={"nav-item"}>*/}
                        {/*    <a className={"nav-link disabled"} href={"#"}>Disabled</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navigate;