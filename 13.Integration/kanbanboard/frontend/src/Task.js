import React from 'react';
import {_Task} from './assets/scss/Task.scss';

function Task({name, done}) {
    return (
        <li className={_Task}>
            <input type='checkbox' checked={done} />
            {name}
            <a href='#' class='Task_Remove'></a>
        </li>
    );
}

export default Task;