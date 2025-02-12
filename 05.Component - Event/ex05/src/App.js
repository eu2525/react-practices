import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            className={'App'}
            ref={outerRef}
            onScrollC
            >
            <div>
                <ul>
                    {
                        Array.from({length: 100}, (_, i) => i+1).map((e) => <li>{`아이템 ${e}`}</li> )
                    }
                </ul>
            </div>
        </div>
    );
}