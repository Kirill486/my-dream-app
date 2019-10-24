import { ViewPoolBlueprint, TApplicationView } from "./ancestor/ViewPoolBlueprint";
import { IApplicationState } from "../model/types";
import { TitleViewController } from "../viewControllers/TitleViewController";
import { TitleView } from "../view/Title/Title";
import { ITitleViewModel } from "../view/Title/types";
import { TodoListViewController } from "../viewControllers/ToDoListViewController";
import { ToDoListView, ITodoListVM } from "../view/ToDoList/ToDoList";

export class ViewPool extends ViewPoolBlueprint<IApplicationState> {
    
    createViewPool(): TApplicationView<IApplicationState>[] {
        const titleView = TitleView;
        const titleContainerId = 'title__container';
        const titleViewModel: ITitleViewModel = {
            title: '#ToDOManage',
        }
        const titleViewController = new TitleViewController(titleView, titleContainerId, titleViewModel);
        
        const toDOoListView = ToDoListView;
        const toDoListContainerId = 'todo-list__container';
        const toDoListViewModel: ITodoListVM = {
            todoIds: [],
            isDoneShown: true,
            addToDo: () => console.log('add_todo'),
            toggleShowDone: () => console.log('toggle_show_done'),
        }
        const toDoListViewController = new TodoListViewController(toDOoListView, toDoListContainerId, toDoListViewModel);

        return [titleViewController, toDoListViewController];
    }
}