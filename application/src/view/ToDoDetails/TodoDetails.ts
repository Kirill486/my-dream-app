import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { IToDo } from "../../model/types";

export interface ITodoDetailsDataVM {
    todos: IToDo[],
    isDoneShown: boolean,
}

export interface ITodoDetailsActionVM {
    toggleShowDone: () => void;
    addToDo: () => void;
    switchDoneToDo: (id: any) => void;
}

export interface ITodoDetailsVM extends
ITodoDetailsDataVM,
ITodoDetailsActionVM
{ }

export class ToDoDetails extends ViewBlueprint<ITodoDetailsVM> {
    
    templateId = 'template__todo-details';
    
    mapViewModel(viewRoot) {
        // not implemented yet
    }
}