import { IToDo } from "../../domain_types/types";

export interface ITodoDetailsDataVM {
    selectedToDo: IToDo,
}

export interface ITodoDetailsActionVM {
    toggleDone: () => void;
    saveToDo: () => void;
    removeToDo: () => void;
}

export interface ITodoDetailsVM extends
ITodoDetailsDataVM,
ITodoDetailsActionVM
{ }