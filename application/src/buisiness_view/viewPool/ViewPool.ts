import { ViewPoolBlueprint, TApplicationView } from "./ancestor/ViewPoolBlueprint";
import { IApplicationState } from "../../domain_types/types";
import { TitleViewController } from "../viewControllers/TitleViewController";
import { TitleView } from "../../view/Title/Title";
import { TodoListViewController } from "../viewControllers/ToDoListViewController";
import { ToDoDetailsViewController } from "../viewControllers/ToDoDetailsViewController";
import {ToDoDetails} from '../../view/ToDoDetails/ToDoDetails'
import {ToDoList} from '../../view/ToDoList/ToDoList'

export class ViewPool extends ViewPoolBlueprint<IApplicationState> {
    
    createViewPool(state: IApplicationState): TApplicationView<IApplicationState>[] {
        const titleView = TitleView;
        const titleContainerId = 'app-title__container';
        
        const titleViewController = new TitleViewController(titleView, titleContainerId);
        
        const toDOoListView = ToDoList;
        const toDoListContainerId = 'app-todo-list__container';
        
        const toDoListViewController = new TodoListViewController(toDOoListView, toDoListContainerId);

        const toDoDetailsView = ToDoDetails;
        const toDoDetailsContainerId = 'app-todo-details__container';

        const toDoDetailsViewController = new ToDoDetailsViewController(toDoDetailsView, toDoDetailsContainerId);

        return [titleViewController, toDoListViewController, toDoDetailsViewController];
    }
}