// Calculator.jsx

import React, {useState} from "react";

let calResult = 0;

function Calculator(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    const sum = () => {
        calResult = number1 + number2;
        console.log(calResult);
    }

    const sub = () => {
        calResult = number1 - number2;
    }

    const multiple = () => {
        calResult = number1 * number2;
    }

    const division = () => {
        calResult = number1 / number2;
    }

    const calculateResult = () => setResult(calResult);

    return (
        <div className={"d-flex"}>
            <input type="text" id={"num1"} value={num1} onChange={(e) => setNum1(e.target.value)} style={{height: 30}} />
            <div className={"align-self-auto"} style={{width: 45}}>
                <button className={"btn btn-primary mx-1"} onClick={sum}> + </button><br/>
                <button className={"btn btn-primary m-1"} onClick={sub}> - </button><br/>
                <button className={"btn btn-primary mx-1"} onClick={multiple}> * </button><br/>
                <button className={"btn btn-primary m-1"} onClick={division}> / </button><br/>
            </div>
            <input type="text" id={"num2"} value={num2} onChange={(e) => setNum2(e.target.value)}  style={{height: 30}} />
            <button className={"btn btn-secondary mx-1"} onClick={calculateResult} style={{height: 40}} > = </button>
            <input type="text" id={"result"} value={result} style={{height: 30}} />
        </div>
    );
}

export default Calculator;