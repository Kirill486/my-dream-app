import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { IApplicationState } from "../model/types";
import { ITodoDetailsVM, ITodoDetailsDataVM, ITodoDetailsActionVM } from "../view/ToDoDetails/TodoDetails";
import { TodoListViewController } from "./ToDoListViewController";
import { ManageController } from "../buisiness_logic/controllers/ManageController";

export class ToDoDetailsViewController extends ViewControllerBlueprint<IApplicationState, ITodoDetailsVM> {
    
    static selectTodo(state: IApplicationState) {
        const id = state.filters.selected;

        if (id) {
            const correspondingToDo = state.toDoList.find((item) => item.id === id);
            return correspondingToDo;
        }

        return null;
    }
    
    mapToVm(state: IApplicationState): ITodoDetailsVM {
        const selectedToDo = ToDoDetailsViewController.selectTodo(state);
        
        const dataVM: ITodoDetailsDataVM = {
            selectedToDo,
        }

        const actionVM: ITodoDetailsActionVM = {
            saveToDo: () => console.log('save your toDo'),
            toggleDone: () => console.log('toggleDone'),
            removeToDo: () => console.log('removeToDo'),
        }

        const viewModel = {
            ...dataVM,
            ...actionVM,
        };

        return viewModel;
    }

}