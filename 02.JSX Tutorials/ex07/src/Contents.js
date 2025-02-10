import React from 'react';

function Contents(props) {
    /*
        1. JSX 밖은 JavaScript 구문이 가능하기 때문에 주석문 작성 가능

    */
    return (
        <div
            /*
                2. JSX 태그 안에 주석이 가능함 -> 비추!
            */
            className='Clock'
            title='시계'>
            { /*
                3. 표현식이 실행되는 블록은 주석이 가능함 -> 추천!
            */ }

            <p>Comment</p>
            { /*
                4. JSX는 HTML이 아니다. 따라서 <!-- --> 은 사용이 불가능
            */ }

            <div>{'00:00:00'}</div>
            /* 5. JSX 안에서 JavaScript 주석 코드를 작성하면 그대로 출력된다 */
        </div>
    );
}

export default Contents;