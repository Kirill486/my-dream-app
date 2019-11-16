import * as React from 'react';
import {ITodoDetailsVM} from './types';
import {doNothing} from '../../domain_types/definitions'
import { createEmptyToDo } from '../../domain_types/domain_fabric';
import { IToDo } from '../../domain_types/types';
import { makeStringOfTime } from './behavior/timeHelper';
import './css/details.css';

export const ToDoDetails: React.FunctionComponent<ITodoDetailsVM> =
(props) => {

    const {selectedToDo} = props;

    const {title = '', description = '', done = false, id} = selectedToDo || createEmptyToDo();
    
    const [toDoTitle, setTitle] = React.useState(title);
    const [toDoDescription, setDescription] = React.useState(description);
    const [toDoDone, setDone] = React.useState(done);
    const [lastToDoId, updateLastToDoId] = React.useState(id);

    // We manually check if another toDo is selected
    // If so we manually update component state
    // Will be fixed with connect (react-redux) implementation

    if (selectedToDo) {
        const toDoHasChanged = selectedToDo.id !== lastToDoId;
        if (toDoHasChanged) {
            setTitle(selectedToDo.title);
            setDescription(selectedToDo.description);
            setDone(selectedToDo.done);
            updateLastToDoId(selectedToDo.id);
        }
    }

    let createdDate, savedDate, doneDate;

    if (selectedToDo) {
        createdDate = makeStringOfTime(selectedToDo.createdTime);
        savedDate = makeStringOfTime(selectedToDo.savedTime);
        doneDate = makeStringOfTime(selectedToDo.doneTime);
    } else {
        createdDate = '';
        savedDate = '';
        doneDate = ''; 
    }

    

    if (!selectedToDo) {
        // show nothing if there's nothing to show
        return null;
    } else {
        return (
            <div className="todo-details__container">
                <div className="todo-details__section todo-details__header">
                    <input 
                        className="todo-details-title-input" 
                        type="text" 
                        value={toDoTitle}
                        onChange={(e: React.SyntheticEvent<HTMLInputElement, any>) => {
                            setTitle(e.currentTarget.value);
                        }}
                    />
                    <div className="todo-details-done-container">
                        <input
                            id="todo-details-done"
                            className="todo-details-done" 
                            type="checkbox"
                            checked={toDoDone}
                            onChange={(e: React.SyntheticEvent<HTMLInputElement, any>) => {
                                setDone(e.currentTarget.checked);
                            }}
                        />
                        <label htmlFor="todo-details-done">Done</label>
                    </div> 
                    <button 
                        className="todo-detais__button todo-details__save background-color-animated"
                        onClick={() => {
                            const toDo: IToDo = {
                                ...selectedToDo,
                                title: toDoTitle,
                                description: toDoDescription,
                                done: toDoDone,

                            }
                            props.saveToDo(toDo);
                        }}
                    >
                            Save
                    </button>
                </div>
                
                <div className="todo-details__editor">
                    <textarea 
                        className="todo-details-content"
                        value={toDoDescription}
                        onChange={(e: React.SyntheticEvent<HTMLTextAreaElement, any>) => {
                            setDescription(e.currentTarget.value);
                        }}
                    >
                    </textarea>                
                </div>
                <div className="todo-details__section todo-details__statistic">
                    <div className="todo-datails__statistic-container todo-datails__created-container">
                        <span className="todo-datails__created">{createdDate}</span>
                    </div>
                    <div className="todo-datails__statistic-container todo-datails__saved-container">
                        <span className="todo-datails__saved">{savedDate}</span>
                    </div>
                    <div className="todo-datails__statistic-container todo-datails__done-container">
                        <span className="todo-datails__done">{doneDate}</span>
                    </div>
                </div>
                <div className="todo-details__section todo-details-danger background-color-animated">
                    <button 
                        className="todo-detais__button todo-detais__delete"
                        onClick={() => {
                            const id = selectedToDo.id as number;
                            props.removeToDo(id);
                        }}
                    >
                            Delete
                        </button>
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