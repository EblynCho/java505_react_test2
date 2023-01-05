// Child2.jsx

import React from "react";

// Child2 컴포넌트는 부모 컴포넌트에서 전달 받은 2개의 key 가 존재함
// props 에 value, childValue key 를 전달 받았고, 해당 key 에 1:1로 매칭된 데이터가 존재함
//      value : "부모 데이터", childValue : setState() 함수가 들어있음
function Child2(props) {

    // 부모 컴포넌트에서 props 를 통해서 전달받은 함수를 실행
    // 부모 컴포넌트에서 전달받은 함수가 부모의 state 를 수정할 수 있는 setState() 함수이다
    const sendData = () => {
        props.childValue('자식 데이터');
    }
    return (
        <div className={"border border-2 p-2 my-2 rounded"}>
            <h3>Child2 컴포넌트 영역</h3>
            {/* 부모 컴포넌트에서 props 를 통해서 전달받은 데이터 출력 */}
            <p>부모 컴포넌트에서 전달받은 데이터 : {props.value}</p>
            {/* 버튼 클릭 시 지정한 함수 실행 */}
            <button onClick={sendData} className={"btn btn-primary"}> 클릭 시 데이터 전달</button>
        </div>
    );
}

export default Child2;