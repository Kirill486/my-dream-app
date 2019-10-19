import { IApplicationState } from '../../model/types';
import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { ITodoListVM, ITodoListDataVM, ITodoListActionVM } from '../../view/ToDoList/ToDoList';
import { FilterController } from '../FilterController';

export class TodoListViewController extends ViewControllerBlueprint<IApplicationState, ITodoListVM> {
    map(state: IApplicationState) {
        const todoListDataVM: ITodoListDataVM = {
            todoIds: state.toDoList,
            isDoneShown: state.filters.showDone,
        };
        const todoListActionVM: ITodoListActionVM = {
            toggleShowDone: () => FilterController.toggleShowDone.use({}),
            addToDo: () => console.log('Add todo'),
        };
        const toDoListVM: ITodoListVM = {
            ...todoListDataVM,
            ...todoListActionVM,
        }

        return toDoListVM;
    }
}