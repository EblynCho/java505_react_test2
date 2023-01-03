import React from "react";

const styles = {
    footer: {
        backgroundColor: "lightgray",
    },
}

function Footer() {
    return (
        <div className={"mt-5 p-5 text-center"} style={styles.footer}>
            <p>made by bee</p>
        </div>
    );
}

export default Footer;