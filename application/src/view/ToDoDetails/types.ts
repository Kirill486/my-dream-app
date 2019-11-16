import { IToDo } from "../../domain_types/types";

export interface ITodoDetailsDataVM {
    selectedToDo: IToDo,
}

export interface ITodoDetailsActionVM {
    toggleDone: (id: number) => void;
    saveToDo: (todo: IToDo) => void;
    removeToDo: (id: number) => void;
}

export interface ITodoDetailsVM extends
ITodoDetailsDataVM,
ITodoDetailsActionVM
{ }