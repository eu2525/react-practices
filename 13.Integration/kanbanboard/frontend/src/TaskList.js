import React from 'react';
import Task from './Task';

function TaskList({tasks}) {
    return (
        <ul>
            {
            tasks?.map(task => <Task
                                    key={task.no}
                                    name={task.name}
                                    done={task.done}/>)
            }
        </ul>
    );
}

export default TaskList;