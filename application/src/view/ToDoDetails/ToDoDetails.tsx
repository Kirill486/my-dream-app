import * as React from 'react';
import {ITodoDetailsVM} from './types';
import {doNothing} from '../../domain_types/definitions'

export const ToDoDetails: React.FunctionComponent<ITodoDetailsVM> =
(props) => {
    const [title, setTitle] = React.useState(props.selectedToDo.title);
    const [description, setDescription] = React.useState(props.selectedToDo.description);
    const [done, setDone] = React.useState(props.selectedToDo.description);

    if (!props.selectedToDo) {
        // show nothing if there's nothing to show
        return null;
    } else {
        return (
            <div className="todo-details__container">
                <div className="todo-details__section todo-details__header">
                    <input className="todo-details-title-input" type="text"></input>
                    <div className="todo-details-done-container">
                        <input className="todo-details-done" type="checkbox">Done</input>
                    </div> 
                    <button className="todo-detais__button todo-details__save background-color-animated">Save</button>
                </div>
                
                <div className="todo-details__editor">
                    <textarea className="todo-details-content">
                    </textarea>                
                </div>
                <div className="todo-details__section todo-details__statistic">
                    <div className="todo-datails__statistic-container todo-datails__created-container">
                        <span className="todo-datails__created"></span>
                    </div>
                    <div className="todo-datails__statistic-container todo-datails__saved-container">
                        <span className="todo-datails__saved"></span>
                    </div>
                    <div className="todo-datails__statistic-container todo-datails__done-container">
                        <span className="todo-datails__done"></span>
                    </div>
                </div>
                <div className="todo-details__section todo-details-danger background-color-animated">
                    <button className="todo-detais__button todo-detais__delete">Delete</button>
                </div>
            </div>    
        );
    }

    
}

ToDoDetails.displayName = 'ToDoDetails';
ToDoDetails.defaultProps = {
    selectedToDo: null,
    removeToDo: doNothing,
    saveToDo: doNothing,
    toggleDone: doNothing,
    
}