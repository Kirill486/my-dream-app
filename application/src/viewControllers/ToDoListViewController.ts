import { IApplicationState } from '../model/types';
import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { ITodoListVM, ITodoListDataVM, ITodoListActionVM } from '../view/ToDoList/ToDoList';
import { FilterController } from '../buisiness_logic/FilterController';

export class TodoListViewController extends ViewControllerBlueprint<IApplicationState, ITodoListVM> {
    mapToVm(state: IApplicationState) {
        const todoListDataVM: ITodoListDataVM = {
            todos: state.toDoList,
            isDoneShown: state.filters.showDone,
        };
        const todoListActionVM: ITodoListActionVM = {
            toggleShowDone: () => FilterController.toggleShowDone.use({}),
            addToDo: () => console.log('Add todo'),
            switchDoneToDo: () => console.log('switchDone'),
        };
        const toDoListVM: ITodoListVM = {
            ...todoListDataVM,
            ...todoListActionVM,
        }

        return toDoListVM;
    }
}