// Board.jsx

import React from "react";

const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa",
    }
};

function Board(props) {
    return (
        <div className={"container"}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Jan 3, 2023</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco.</p>
        </div>
    );
}

export default Board;