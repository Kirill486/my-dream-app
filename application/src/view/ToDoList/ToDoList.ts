import { ViewBlueprint } from "../ancestor/ViewBlueprint";

export interface ITodoListDataVM {
    todoIds: any[],
    isDoneShown: boolean,
}

export interface ITodoListActionVM {
    toggleShowDone: () => void;
    addToDo: () => void;
}

export interface ITodoListVM extends
ITodoListDataVM,
ITodoListActionVM
{ }

export class ToDoListView extends ViewBlueprint<ITodoListVM> {
    templateId = 'template__todo-list'
}