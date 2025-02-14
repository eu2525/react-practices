import React from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title} from './assets/scss/Card.scss';
import {Task_List} from './assets/scss/TaskList.scss';

function Card({title, description, tasks}) {
    return (
        <div className={_Card}>
            <div className={Card_Title}>{title}</div>
            <div className={Task_List}> 
                {description} 
                <TaskList tasks={tasks} />
                <input class='Input_Add_Task' type='text' placeholder='태스크 추가' />
            </div>
        </div>
    );
}

export default Card;