// Counter.jsx

import React from "react";

function Counter(props) {
    const count = 0;

    return (
        <div>
            {/* count 값 자체가 0 (그대로 출력됨), 0 : false => && 우측은 출력 X */}
            {count && <h1>현재 카운트 : {count}</h1>}
        </div>
    );
}

export default Counter;