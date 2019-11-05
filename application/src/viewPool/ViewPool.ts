import { ViewPoolBlueprint, TApplicationView } from "./ancestor/ViewPoolBlueprint";
import { IApplicationState } from "../model/types";
import { TitleViewController } from "../viewControllers/TitleViewController";
import { TitleView } from "../view/Title/Title";
import { ITitleViewModel } from "../view/Title/types";
import { TodoListViewController } from "../viewControllers/ToDoListViewController";
import { ToDoListView, ITodoListVM } from "../view/ToDoList/ToDoList";

export class ViewPool extends ViewPoolBlueprint<IApplicationState> {
    
    createViewPool(state: IApplicationState): TApplicationView<IApplicationState>[] {
        const titleView = TitleView;
        const titleContainerId = 'app-title__container';
        
        const titleViewController = new TitleViewController(titleView, titleContainerId);
        
        const toDOoListView = ToDoListView;
        const toDoListContainerId = 'app-todo-list__container';
        
        const toDoListViewController = new TodoListViewController(toDOoListView, toDoListContainerId);

        return [titleViewController, toDoListViewController];
    }
}