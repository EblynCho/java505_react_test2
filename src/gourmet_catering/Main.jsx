import React from "react";
import imgMain from './img/LeCatering.png';

const styles = {
    mainImg: {
        position: "relative",
        textAlign: "center",
    },
    mainText: {
        left: 180,
        bottom: 25,
        fontSize: 40,
        color: "gray",
        position: "absolute",
    }
}

function Main() {
    return (
        <div style={styles.mainImg}>
            <img src={imgMain} alt="LeCatering"/>
            <div style={styles.mainText}>
                Le Catering
            </div>
        </div>
    );
}

export default Main;