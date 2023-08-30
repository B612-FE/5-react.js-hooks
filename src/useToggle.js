import { useState } from 'react';
//커스텀 훅 useToggle을 정의, 초기값없다면 기본으로 false
function useToggle(initialValue = false) {
    //useState사용하여 value상태와 해당상태 변경함수 setValue선언
    const [value, setValue] = useState(initialValue);

    //toggle함스 정의 value 상태를 토글하는 기능 수행
    const toggle = () => {
    setValue(prevValue => !prevValue);
};

    return [value, toggle];//value상태와 toggle함수 반환
}

export default useToggle;
