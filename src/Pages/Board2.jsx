// Board2.jsx

import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";

function Board2(props) {
    const param1 = useLocation();
    const [param2, setParam2] = useSearchParams();

    return (
        <div className={"container"}>
            <p>{param1.search}</p>
            <p>{param2.get("val1")}</p>
            <p>{param2.get("val2")}</p>
        </div>
    );
}

export default Board2;