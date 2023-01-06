import React from "react";

const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa",
    }
};

function Info() {
    return (
        <div className={"container"}>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3 className={"mt-4"}>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
        </div>
    );
}

export default Info;