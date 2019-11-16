import * as React from 'react';
import {IToDoListItemProps} from './types';
import { doNothing } from '../../../domain_types/definitions';
import {createEmptyToDo} from '../../../domain_types/domain_fabric'
import { backgroundColorAnimated } from '../../constants';

const containerClass = 'item__container';
const selectedContainerClass = 'item__container--selected';

export const ToDoListItem: React.FunctionComponent<IToDoListItemProps> =
(props) => {
    let containerClassName = `${containerClass} ${props.isSelected ? selectedContainerClass : ''} ${backgroundColorAnimated}`;
    return (
        <div className={containerClassName}>
            <span 
                className="item__title"
                onClick={props.selectToDO}
            >
                {props.todo.title}
            </span>
            <span 
                className="item__select-area"
                onClick={props.selectToDO}
            >
                --->>
            </span>
            <input 
                className="item__done" type="checkbox" 
                onChange={props.switchDone}
                checked={props.todo.done}
            />
        </div>
    )
}

ToDoListItem.displayName = 'ToDoListItem';
ToDoListItem.defaultProps = {
    todo: createEmptyToDo(),
    selectToDO: doNothing,
    switchDone: doNothing,
}
