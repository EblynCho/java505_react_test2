// Accommodate.jsx

import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    // state 를 사용하기 위해 useState() 를 설정
    const [isFull, setIsFull] = useState(false);
    // 해당 컴포넌트 내부에서 생성해야 할 state 객체 및 setState 를 커스텀 훅을 통해서 생성함
    // 커스텀 훅을 사용했기 때문에 재활용이 가능함
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 리액트 생명주기 함수를 사용하기 위해서 useEffect 를 설정함
    // 의존성 배열이 없을 경우 componentDidMount, componentWillUnmount 를 실행하는 것과 같은 효과
    useEffect(() => {
        console.log("----------------------");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
    }, []);

    // 의존성 배열에 count 를 설정하여 count 값이 수정되면 componentDidUpdate 를 실행하는 것과 같은 효과
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log("현재 count 값 : " + count);
    }, [count]);

    return (
        <div>
            {/* 현재 state 로 설정된 count 의 값을 출력 */}
            <p>{`총 ${count}명 수용했습니다.`}</p>
            {/* 커스텀 훅을 통해서 만들어진 사용자 입장/퇴장 함수를 버튼에 등록 */}
            <button className={"btn btn-primary"} onClick={increaseCount} disabled={isFull}>입장</button>
            <button className={"btn btn-warning"} onClick={decreaseCount}>퇴장</button>
            {/* if 문 사용 불가능하기때문에 이렇게 씀(or 삼항연산자 사용) */}
            {/* 앞부분이 false 일 경우 && 뒷부분 아예 실행되지 않음 */}
            {/* 앞이 true 일때 && 뒷부분 확인 */}
            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;