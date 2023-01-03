import React from "react";
import imgAbout from './img/AboutCatering.png';

function About() {
    return (
        <div className={"container pt-4"}>
            <div className={"row"}>
                <div className={"col"}>
                    <img src={imgAbout} alt=""/>
                </div>
                <div className={"col"}>
                    <div className={"text-center"}>
                        <h2 className={"mt-3"}>About Catering</h2>
                        <h5 className={"mt-5 mb-3"}>Tradition since 1889</h5>
                    </div>
                    <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
}

export default About;