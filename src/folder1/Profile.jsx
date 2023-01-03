import React from "react";

// 확장표현식 : 대입연산자 오른쪽의 데이터를 연산자 왼쪽의 변수에 저장 시 [], {} 에 표시된 이름에 대입
// function Profile( {userId, userName, userTel, userEmail} ) {
function Profile(props) {
    // 별도의 연산이 필요할 때, 변수로 저장해서 사용
    let data = props;
    let userId = props.userId;

    return (
        <div className={"border rounded-3 px-3 m-4"}>
            <div className={"my-3"}>
                <label htmlFor={"user-id"} className={"form-label"}>아이디 : </label>
                <input type={"text"} id={"user-id"} className={"form-control"} value={userId} />
            </div>
            <div className={"my-3"}>
                <label htmlFor={"user-name"} className={"form-label"}>이름 : </label>
                <input type={"text"} id={"user-name"} className={"form-control"} value={data.userName}/>
            </div>
            <div className={"my-3"}>
                <label htmlFor={"user-tel"} className={"form-label"}>전화번호 : </label>
                <input type={"tel"} id={"user-tel"} className={"form-control"} value={data.userTel}/>
            </div>
            <div className={"my-3"}>
                <label htmlFor={"usesr-email"} className={"form-label"}>이메일 : </label>
                <input type={"email"} id={"user-email"} className={"form-control"} value={data.userEmail}/>
            </div>
        </div>
    );
}

export default Profile;