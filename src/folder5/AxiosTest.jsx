// AxiosTest.jsx

import React, {useEffect} from "react";
import axios from "axios";

// axios : node.js 에서 비동기 통신을 하기 위한 라이브러리, promise 를 사용함
// axios 는 rest 방식을 지원함
// get(요청주소) : get 방식으로 서버에 데이터를 요청함
// post(요청주소) : post 방식으로 서버에 데이터를 요청함
// then() : 정상적으로 통신이 성공했을 경우 실행할 내용
// catch() : 통신이 실패했을 경우 실행
// 사용법 :
// axios.get(url)
// .then(function(rep) {
//      성공 시 실행할 소스;
// })
// .catch(function(err) {
//      실패 시 실행할 소스;
// })

// npm install axios;  // 사용할 프로젝트에서 axios 설치
// import axios form 'axios';  // 사용할 컴포넌트에서 axios import
function AxiosTest(props) {
    useEffect(() => {
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109').then((req) => {
            // alert('통신 성공');
            // console.log(req);
            // console.log(req.data);
            console.log(req.data.boxOfficeResult.dailyBoxOfficeList);
            const list = req.data.boxOfficeResult.dailyBoxOfficeList;
            // console.log(list);

            for (let i = 0; i < list.length; i++) {
                let str = `순번 : ${list[i].rnum}
순위 : ${list[i].rank}
제목 : ${list[i].movieNm}
개봉일 : ${list[i].openDt}
관람객 : ${list[i].audiCnt}`
                console.log(str + "\n");
            }
        })
            .catch((err) => {
                alert('통신 실패');
            })
    },[]);
    return (
        <div>

        </div>
    );
}

export default AxiosTest;