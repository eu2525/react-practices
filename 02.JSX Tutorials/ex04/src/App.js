import React from 'react';
import Header from './Header.js';
import Contents from './Contents.js';


function App() {
    /*
    return (
        <div>
            <Header />
            <Contents />
        </div>
    );
    */

    return React.createElement('div', {
        id : 'App'
    }, React.createElement(Header, null), React.createElement(Contents, null) )
}

export {App};