import React from "react";
import NotificationList from "./folder2/NotificationList";
import CountButton from "./folder2/CountButton";
import CountButton2 from "./folder2/CountButton2";
import Accommodate from "./folder2/Accommodate";

function App5() {
    return (
        <div className={"container"}>
            <NotificationList />
            <CountButton />
            <CountButton2 />
            <br/>
            <Accommodate />
        </div>
    );
}

export default App5;