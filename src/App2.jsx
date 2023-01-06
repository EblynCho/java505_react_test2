import React from "react";
// 만든 컴포넌트 로딩할 때에는 경로 필요
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import Info from "./Info";
import LinkList from "./LinkList";

const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa",
    }
};

function App2() {
    return (
        <div>
            <Header />
            <Navigate />
            <Footer />
        </div>
    );
}

export default App2;