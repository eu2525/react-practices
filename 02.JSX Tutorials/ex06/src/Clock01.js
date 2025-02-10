import React from 'react';

function Clock01(props) {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const sec = now.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    return (
        <div>
            {hour}
            {':'}
            {minutes}
            {':'}
            {sec}
        </div>
    );
}

export default Clock01;