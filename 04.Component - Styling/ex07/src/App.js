import React from 'react';
import Header from 'Header.js'
import styled from 'styled-components';

import './assets/scss/App.scss'

/* styled의 div 함수로 다음의 파라미터를 넘기는거임*/
const DivApp = styled.div`
    text-align: center;
    color: #111;
`;

export default function() {
    return (
        <DivApp>
            <Header />
        </DivApp>
    );
}