import { IApplicationState, IToDo, IFilterState } from '../../domain_types/types';
import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { ITodoListDataVM, ITodoListActionVM, ITodoListVM } from '../../view/ToDoList/types';
import { app_id } from '../../domain_types/definitions';
import { applicationModel } from '../../model/configureStore';
import { toggleShowDoneAction, selectAction } from '../../buisiness_logic/sagas/actions/filterSagaActions';
import { addAction, toggleDoneAction } from '../../buisiness_logic/sagas/actions/manageSagaActions';

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

        const {dispatch} = applicationModel;

        const todoListActionVM: ITodoListActionVM = {
            toggleShowDone: () => dispatch(toggleShowDoneAction()),
            addToDo: () => dispatch(addAction()),
            switchDoneToDo: (id: app_id) => dispatch(toggleDoneAction(id)),
            selectToDo: (id: app_id) => dispatch(selectAction(id)),
        };
        const toDoListVM: ITodoListVM = {
            ...todoListDataVM,
            ...todoListActionVM,
        }

        return toDoListVM;
    }
}