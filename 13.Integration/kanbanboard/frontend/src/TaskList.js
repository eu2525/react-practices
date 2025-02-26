import React from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({tasks}) {
    return (
        <div className={Task_List}>
            <ul>
                {
                    tasks?.map(task => <Task
                                        key={task.no}
                                        no={task.no}                                        
                                        name={task.name}
                                        done={task.done} />)
                }
            </ul>
            <input type='text' className={Input_Add_Task} placeholder={'태스크 추가'} />
        </div>
    );
}

export default TaskList;