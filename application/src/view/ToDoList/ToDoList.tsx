import * as React from 'react';
import {ITodoListVM} from './types';
import {doNothing} from '../../domain_types/definitions'

export const ToDoList: React.FunctionComponent<ITodoListVM> = () => {
    return (
        <div className="todo-list__container">
            <div className="todo-list__title-row">
                <button className="todo-list__add-todo background-color-animated">+</button>
                <div className="todo-list__show-done-container">
                    <input className="todo-list__show-done" type="checkbox">Show done</input>
                </div>
            </div>
            <div className="todo-list__items-container"></div>
        </div>
    );
}

ToDoList.displayName = 'ToDoList';
ToDoList.defaultProps = {
    todos: [],
    isDoneShown: true,
    selectedToDoId: null,
    addToDo: doNothing,
    selectToDo: doNothing,
    switchDoneToDo: doNothing,
    toggleShowDone: doNothing,
}
