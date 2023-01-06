// DarkOrLight.jsx
import React, {useState, useCallback} from "react";
// 파일로 생성된 컨텍스트를 import 하여 사용, 여러 컴포넌트에서 활용이 가능함
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";

function DarkOrLight(props) {
    // state 로 등록
    const [theme, setTheme] = useState('light');

    // useCallback() : 콜백함수를 반환하는 리액트 hook
    // 메모이제이션(memoization) 기능을 사용할 수 있어 지정한 의존성 배열에 등록된 데이터가 변경되었을 경우에만 동작
    // 리소스를 적게 사용 -> 렌더링 시간이 적음
    // cf. useEffect() 사용하면 변경되지 않고 동일하더라도 re-rendering -> 시간 오래걸림
    const toggleTheme = useCallback(() => {
        // state 로 지정된 theme 값이 변경될 경우에만 동작
        if (theme == "light") {
            setTheme("dark");
        }
        else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        // 컨텍스트 provider 로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 함
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContext />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;