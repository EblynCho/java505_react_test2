import React from "react";
import Calculator from "./folder4/Calculator";
import App from "./folder4/App";
import App2 from "./folder4/App2";
import DarkOrLight from "./folder4/DarkOrLight";
import App4 from "./folder4/App4";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Board from "./Pages/Board";
import Board2 from "./Pages/Board2";

function App7(props) {
    return (
        // <div className={"container"}>
        //     {/*<Calculator />*/}
        //     {/*<hr/>*/}
        //     {/*<App />*/}
        //     {/*<hr/>*/}
        //     {/*<App2 />*/}
        //     {/*<hr/>*/}
        //     {/*<DarkOrLight />*/}
        //     <hr/>
        //     <App4 />
        // </div>

        // 리액트 라우터 : SPA 방식의 리액트 앱을 MPA 방식으로 사용할 수 있도록 해주는 라이브러리
        // Routes : 페이지 객체를 여러 개 가질 수 있는 객체
        // Route : 화면에 그려지는 페이지 객체
        // path : 웹 브라우저에 표시되는 url 주소 설정, 절대경로/상대경로 다 사용 가능, * 사용 시 모든 페이지를 뜻함(path url 을 정확하게 입력해야 접속이 가능)
        // element : path 로 지정된 url 주소와 매칭되는 컴포넌트
        // <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html 의 <a> 태그와 같음
        //      to : url 주소 입력, Route 컴포넌트에 path 로 설정된 주소 입력
        // <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시

        // URL 파라미터 : restful 방식의 주소형태로 구성되는 파라미터
        // 기존 url 뒤에 /와 :파라미터명을 사용하여 데이터를 전달하는 방식
        // rest 방식에서 많이 사용함
        // 연결된 컴포넌트에서 useParams 훅을 사용해야 함
        // 사용법 :
        // 기존url/:파라미터1/:파라미터2
        // <Route path={url/:test1/:test2} element={<Url />} />

        // 쿼리스트링 : 기존의 get 방식으로 웹 브라우저의 주소에 파라미터를 함께 전달하는 방식
        // <Route> 컴포넌트의 path 에 변경이 없음
        // 지정된 컴포넌트에서 몇가지 옵션 사항을 사용할 수 있음
        //  옵션 :
        //      pathname : 쿼리 스트링을 제외한 현재 주소의 경로
        //      search : 맨 앞의 ? 문자를 포함한 쿼리 스트링 값 전체
        //      hash : 주소의 # 문자열 뒤의 값(구형 브라우저에서만 사용)
        //      state : 페이지 이동 시 임의로 추가할 상태 값
        //      key : location 객체의 고유 갑
        // useLocation(), useSearchParams() 훅을 사용하여 데이터를 가져올 수 있음
        // useLocation() 훅을 사용하여 데이터를 가져오면 원하는 파라미터 값을 가져오기 위해 직접 파싱을 진행해야 함
        // useSearchParams() 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 따로 가져올 수 있음
        // 사용법 :
        // 기존 url?파라미터1=값1&파라미터2=값2

        // useNavigate() : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 훅
        // 사용법 :
        // const navigate = useNavigate();
        // navigate(-1)  // History 를 사용하여 뒤 페이지로 이동, 숫자를 음수로 입력 시 해당 뒤로 이동 이고, 양수로 입력 시 앞으로 이동
        // navigate('/url')  // 지정한 url 로 이동

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    {/*'/' 밑에 자식태그로 들어간다. 자식태그로 넣지않으려면 path={"/blog/"} 로 써야함*/}
                    <Route index element={<Home />} />
                    <Route path={"blogs"} element={<Blogs />} />
                    <Route path={"contact"} element={<Contact />} />
                    <Route path={"*"} element={<NoPage />} />
                    {/*<Route path={"profile/:username/:test"} element={<Profile />}*/}
                    <Route path={"board/:boardIdx"} element={<Board />} />
                    <Route path={"board2"} element={<Board2 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App7;