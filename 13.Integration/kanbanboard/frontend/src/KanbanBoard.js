import React, {useState} from 'react';
import CardList from './CardList';
import data from './assets/json/data.js';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const [cards, setCards] = useState(data);
    
    const todoCards = cards.filter(card => card.status === 'ToDo');
    const inProgressCards = cards.filter(card => card.status === 'Doing');
    const doneCards = cards.filter(card => card.status === 'Done');

    return (
        <div className={Kanban_Board}>
            <CardList title="To Do" cards={todoCards} />
            <CardList title="In Progress" cards={inProgressCards} />
            <CardList title="Done" cards={doneCards} />
        </div>
    );
}

export default KanbanBoard;