import React, {useRef, useState} from 'react';
import Header from './Header.js';
import Contents from './Contents.js';


function App() {
    const refDiv = useRef(null);

    return (
        <div
            id = "App"
            ref={refDiv}>
            <Header />
            <Contents />
        </div>
    );
    
}

export {App};