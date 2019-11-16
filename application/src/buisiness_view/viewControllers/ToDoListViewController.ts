import { IApplicationState, IToDo, IFilterState } from '../../domain_types/types';
import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { FilterController } from '../../buisiness_logic/controllers/FilterController';
import { ManageController } from '../../buisiness_logic/controllers/ManageController';
import { ITodoListDataVM, ITodoListActionVM, ITodoListVM } from '../../view/ToDoList/types';

export class TodoListViewController extends ViewControllerBlueprint<IApplicationState, ITodoListVM> {
    
    static filterToDos = (todos: IToDo[], filters: IFilterState) => {
        const {showDone} = filters;
        if (showDone) {
            return todos;
        } else {
            return todos.filter((item) => !item.done);
        }
    } 
    
    mapToVm(state: IApplicationState) {
        
        const todos = TodoListViewController.filterToDos(state.toDoList, state.filters);
        
        const todoListDataVM: ITodoListDataVM = {
            todos,
            isDoneShown: state.filters.showDone,
            selectedToDoId: state.filters.selected,
        };
        const todoListActionVM: ITodoListActionVM = {
            toggleShowDone: () => FilterController.toggleShowDone.use({}),
            addToDo: () => ManageController.add.use({}),
            switchDoneToDo: (id: any) => ManageController.toggleDone.use({ id }),
            selectToDo: (id: any) => FilterController.select.use({ id }),
        };
        const toDoListVM: ITodoListVM = {
            ...todoListDataVM,
            ...todoListActionVM,
        }

        return toDoListVM;
    }
}