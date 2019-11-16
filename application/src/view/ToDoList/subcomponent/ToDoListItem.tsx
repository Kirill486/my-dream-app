import * as React from 'react';
import {IToDoListItemProps} from './types';
import { doNothing } from '../../../domain_types/definitions';
import {createEmptyToDo} from '../../../domain_types/domain_fabric'

export const ToDoListItem: React.FunctionComponent<IToDoListItemProps> =
(props) => {
    return (
        <div className="item__container background-color-animated">
            <span className="item__title">{props.todo.title}</span>
            <span className="item__select-area">--->></span>
            <input className="item__done" type="checkbox"/>
        </div>
    )
}

ToDoListItem.displayName = 'ToDoListItem';
ToDoListItem.defaultProps = {
    todo: createEmptyToDo(),
    selectToDO: doNothing,
    switchDone: doNothing,
}
