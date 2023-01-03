import React from "react";

const styles = {
    contactInput: {
        // border: "none",
        borderBottom: "1 solid",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
    },
    contactBtn: {
        border: "none",
    },
}

function Contact() {
    return (
        <div className={"ms-3 mt-5 pb-5"}>
            <h2>Contact</h2>
            <p className={"mt-5"}>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p>Catering Service, 42nd Living St, 43043 New York, NY</p>

            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

            <div className={"mx-3 mb-4"}>
                <div className={"row py-2"}>
                    <input className={"py-2 underline"} type="text" placeholder={"Name"} style={styles.contactInput}/>
                </div>
                <div className={"row py-2"}>
                    <input className={"py-2"} type="text" placeholder={"How many people"} style={styles.contactInput}/>
                </div>
                <div className={"row py-2"}>
                    <input className={"py-2"} type="datetime-local" value="2023-01-03 16:00:00" style={styles.contactInput}/>
                </div>
                <div className={"row py-2"}>
                    <input className={"py-2"} type="text" placeholder={"Message \\ Special requirements"} style={styles.contactInput}/>
                </div>
            </div>

            <button className={"px-3 py-1"} style={styles.contactBtn}>SEND MESSAGE</button>
        </div>
    );
}

export default Contact;