import * as React from 'react';
import {ITodoListVM} from './types';
import { ToDoListItem } from './subcomponent/ToDoListItem';
import {doNothing} from '../../domain_types/definitions'
import { IToDoListItemProps } from './subcomponent/types';
import './css/list.css';

export const ToDoList: React.FunctionComponent<ITodoListVM> =
(props: ITodoListVM) => {
    return (
        <div className="todo-list__container">
            <div className="todo-list__title-row">
                <button 
                    className="todo-list__add-todo background-color-animated"
                    onClick={props.addToDo}
                >
                        +
                </button>
                <div className="todo-list__show-done-container">
                    <label htmlFor="show-done">Show Done</label>
                    <input 
                        id="show-done"
                        className="todo-list__show-done" 
                        type="checkbox" 
                        checked={props.isDoneShown}
                        onChange={() => {
                            props.toggleShowDone();
                        }}
                    />                                       
                </div>
            </div>
            <div className="todo-list__items-container">
                {props.todos.map((item) => {
                    const itemProps: IToDoListItemProps = {
                        todo: item,
                        selectToDO: () => props.selectToDo(item.id),
                        switchDone: () => props.switchDoneToDo(item.id),
                        isSelected: item.id === props.selectedToDoId,
                    }
                    return (<ToDoListItem {...itemProps} key={item.id} />)
                })}
            </div>
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
