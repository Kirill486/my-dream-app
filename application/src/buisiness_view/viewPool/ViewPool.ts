import { ViewPoolBlueprint, TApplicationView } from "./ancestor/ViewPoolBlueprint";
import { IApplicationState } from "../../model/types";
import { TitleViewController } from "../viewControllers/TitleViewController";
import { TitleView } from "../../view/Title/Title";
import { TodoListViewController } from "../viewControllers/ToDoListViewController";
import { ToDoDetailsViewController } from "../viewControllers/ToDoDetailsViewController";
import { ToDoListView } from "../../view/ToDoList/ToDoList";
import { ToDoDetails } from "../../view/ToDoDetails/TodoDetails";

export class ViewPool extends ViewPoolBlueprint<IApplicationState> {
    
    createViewPool(state: IApplicationState): TApplicationView<IApplicationState>[] {
        const titleView = TitleView;
        const titleContainerId = 'app-title__container';
        
        const titleViewController = new TitleViewController(titleView, titleContainerId);
        
        const toDOoListView = ToDoListView;
        const toDoListContainerId = 'app-todo-list__container';
        
        const toDoListViewController = new TodoListViewController(toDOoListView, toDoListContainerId);

        const toDoDetailsView = ToDoDetails;
        const toDoDetailsContainerId = 'app-todo-details__container';

        const toDoDetailsViewController = new ToDoDetailsViewController(toDoDetailsView, toDoDetailsContainerId);

        return [titleViewController, toDoListViewController, toDoDetailsViewController];
    }
}