import { IToDo } from "../../../domain_types/types";

export interface IToDoListItemStateProps {
    todo: IToDo,
    isSelected: boolean,
}

export interface IToDoListItemDispatchProps {
    switchDone: () => void;
    selectToDO: () => void;
}

export interface IToDoListItemProps extends
IToDoListItemStateProps,
IToDoListItemDispatchProps
{}
