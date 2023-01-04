// useCounter.jsx

import React, {useState} from "react";

// 커스텀 훅
// 이름에 use 를 접두사로 사용
// 매개변수, 반환값을 사용자 마음대로 설정
// 내부에서 훅을 사용한 함수이며, 소스코드 재활용을 위해서 사용함

// 커스텀 훅으로 설정한 함수
// 매개변수를 마음대로 설정함
function useCounter(initValue) {
    // state 사용을 위해서 useState 설정
    // setCount : 해당 변수를 수정할 함수명
    const [count, setCount] = useState(initValue);

    // 함수 실행 시 state 룰 수정하기 위한 setCount 를 실행
    const increaseCount = () => {
        setCount((count) => count + 1);
    }

    const decreaseCount = () => {
        // 자바스크립트에서 지원하는 수학 클래스의 max 함수를 사용하여 0 이하의 값을 사용할 수 없도록 제약
        // setCount((count) => Math.max(count - 1, 0));  // 0 밑으로 내려가지 않게 설정
        setCount((count) => {
            count--;
            if (count < 0) {
                count = 0;
            }
            return count;
        })
    }

    return [count, increaseCount, decreaseCount];
}

export default useCounter;