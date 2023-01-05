// LoginControl.jsx

import React, {useState} from "react";
import button from "bootstrap/js/src/button";
import Greeting from "./Greeting";

function LoginButton(props) {
    return (
        <button type={"button"} onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props) {
    return (
        <button type={"button"} onClick={props.onClick}>로그아웃</button>
    );
}

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // 엘리먼트 변수 : 자바스크립트 변수에 리액트 컴포넌트를 저장한 것
    // 조건부 렌더링을 사용하기 위해서 자바스크립트 변수 button 에 리액트 컴포넌트를 저장
    let button;

    // state 의 상태에 따라서 엘리먼트 변수에 저장될 리액트 컴포넌트를 변경
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    }
    else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 엘리먼트 변수에 저장된 리액트 컴포넌트가 출력된다 */}
            {button}
        </div>
    );
}

export default LoginControl;