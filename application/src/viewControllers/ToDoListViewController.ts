import { IApplicationState } from '../model/types';
import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { ITodoListVM, ITodoListDataVM, ITodoListActionVM } from '../view/ToDoList/ToDoList';
import { FilterController } from '../buisiness_logic/controllers/FilterController';
import { ManageController } from '../buisiness_logic/controllers/ManageController';

export class TodoListViewController extends ViewControllerBlueprint<IApplicationState, ITodoListVM> {
    mapToVm(state: IApplicationState) {
        const todoListDataVM: ITodoListDataVM = {
            todos: state.toDoList,
            isDoneShown: state.filters.showDone,
        };
        const todoListActionVM: ITodoListActionVM = {
            toggleShowDone: () => FilterController.toggleShowDone.use({}),
            addToDo: () => ManageController.add.use({}),
            switchDoneToDo: (id: any) => ManageController.toggleDone.use({ id }),
        };
        const toDoListVM: ITodoListVM = {
            ...todoListDataVM,
            ...todoListActionVM,
        }

        return toDoListVM;
    }
}