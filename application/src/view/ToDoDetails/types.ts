import { IToDo } from "../../domain_types/types";
import { app_id } from "../../domain_types/definitions";

export interface ITodoDetailsDataVM {
    selectedToDo: IToDo,
}

export interface ITodoDetailsActionVM {
    toggleDone: (id: app_id) => void;
    saveToDo: (todo: IToDo) => void;
    removeToDo: (id: app_id) => void;
}

export interface ITodoDetailsVM extends
ITodoDetailsDataVM,
ITodoDetailsActionVM
{ }