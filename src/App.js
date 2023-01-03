import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

// JSX : 자바스크립트 + html/xml, 하나의 파일에 자바스크립트와 html 을 동시에 작성
// 컴포넌트 : 리액트를 구성하는 최소 UI 단위, 데이터(props)를 입력 받아 view(state)상태에 따라 화면을 출력하는 함수, 컴포넌트의 이름은 항상 대문자로 시작(리액트는 소문자로 시작하는 컴포넌트를 html 태그로 인식함), UI를 재사용 가능한 개별적인 여러 조각으로 나누어서 화면 구현
// 함수형 컴포넌트 : 현재 많이 사용되는 방식, 사용이 간편함, 자바스크립트 함수를 작성하는 방식
// 클래스형 컴포넌트 : 기존에 많이 사용되는 방식, React.Component 를 상속받아 구현함, 컴포넌트 구성요소, 리액트 생명주기를 모두 포함하고 있음
// props : 컴포넌트 간의 데이터를 주고 받기 위한 객체, properties 의 줄임말, 읽기 전용, 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달 시 주로 사용
// state : 현재 컴포넌트의 상태를 표시하는 객체, setState() 를 통해서 데이터를 수정, 데이터 수정 시 화면이 재렌더링이 됨
// hooks : react 16.8 버전에서 추가된 기능, 상태 변경 및 리액트 생명주기에 관련된 함수를 사용할 수 있게 해주는 기능, react hooks 를 사용하면 클래스 컴포넌트를 사용할 필요가 없음
// 컨텍스트 : 데이터 전달 객체, 컴포넌트 간의 데이터 전달 시 props를 사용하면 순차적으로 데이터를 전달함, 컨텍스트는 위치에 상관없이 데이터를 바로 전달할 수 있음
// react-router : 각 페이지의 경로를 구성하는 라이브러리

// JSX 문법
// 1. 반드시 1개의 부모 요소가 다른 요소를 감싸는 형태로 구성해야 함
// 2. 자바스크립트 표현식 사용 가능
//      {} 안에 자바스크립트를 사용할 수 있음
//      if 문은 표현식이 아니기 때문에(연산식임) jsx에서 사용할 수 없음 -> 삼항연산자를 대신 사용
// 3. html 속성을 카멜명명법으로 사용
//      font-size => fontSize 로 사용함
//      class => className 으로 사용
// 4. jsx 문법은 html 태그 사용 시 반드시 시작 태그와 끝 태그를 모두 입력해야 함
//      축약 형식으로 시작 태그 끝에 /를 사용하는 방식도 상관 없음

function App() {
    let num1 = 10;
    const flag =false;
    let result;

    // {} 표현식 내에서 자바스크립트의 if 문을 사용할 수 없으므로 외부에서 미리 연산
    if (flag) {
        result = <div>결과가 true</div>
    }
    else {
        result = <div>결과가 false</div>
    }

    return (
        // <>
        //     이런 태그도 가능함
        // </>
    <div className="App">
        <button type={"button"}>기본 버튼</button><br/>
        <button type={"button"} className={"btn btn-primary"}>부트스트랩 적용 버튼</button><br/>
        <Button type={"button"} variant={"success"}>react용 부트스트랩 적용 버튼</Button>

        <p>{num1 + 10}</p>

        <div>
            {/* if 문을 사용할 수 없고 대신 삼항연산자 사용 */}
            { flag == true ? 100 : 0 }
        </div>

        <div>{result}</div>

        <br/><hr/><br/>

        <ClassComponent />
        <FunctionComponent />

        <br/><hr/><br/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
