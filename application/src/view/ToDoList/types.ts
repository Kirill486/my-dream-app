import { IToDo } from "../../domain_types/types";
import { app_id } from "../../domain_types/definitions";

export interface ITodoListDataVM {
    todos: IToDo[];
    isDoneShown: boolean;
    selectedToDoId: app_id;
}

export interface ITodoListActionVM {
    toggleShowDone: () => void;
    addToDo: () => void;
    switchDoneToDo: (id: app_id) => void;
    selectToDo: (id: app_id) => void;
}

export interface ITodoListVM extends
ITodoListDataVM,
ITodoListActionVM
{ }