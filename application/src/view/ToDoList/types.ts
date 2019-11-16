import { IToDo } from "../../domain_types/types";

export interface ITodoListDataVM {
    todos: IToDo[];
    isDoneShown: boolean;
    selectedToDoId: any;
}

export interface ITodoListActionVM {
    toggleShowDone: () => void;
    addToDo: () => void;
    switchDoneToDo: (id: any) => void;
    selectToDo: (id: any) => void;
}

export interface ITodoListVM extends
ITodoListDataVM,
ITodoListActionVM
{ }