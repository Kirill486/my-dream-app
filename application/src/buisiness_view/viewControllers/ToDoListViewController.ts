import { IApplicationState, IToDo } from '../../domain_types/types';
import { ITodoListDataVM, ITodoListActionVM, ITodoListVM } from '../../view/ToDoList/types';
import { app_id } from '../../domain_types/definitions';
import { ToDoList } from '../../view/ToDoList/ToDoList';
import { connect } from 'react-redux';
import { addAction, toggleDoneAction } from '../../buisiness_logic/sagas/actions/manageSagaActions';
import { selectAction, toggleShowDoneAction } from '../../buisiness_logic/sagas/actions/filterSagaActions';

const selectVisibleToDos = (state: IApplicationState): IToDo[] => {
    const {toDoList, filters} = state;
    const {showDone} = filters;
    if (showDone) {
        return toDoList;
    } else {
        return toDoList.filter((item) => !item.done);
    }
} 

const mapStateToProps =
(
    state: IApplicationState
): ITodoListDataVM => {
    return {
        todos: selectVisibleToDos(state),
        isDoneShown: state.filters.showDone,
        selectedToDoId: state.filters.selected,
    }
}

const mapDispatchToProps =
(
    dispatch: any,
): ITodoListActionVM => {
    return {
        addToDo: () => dispatch(addAction()),
        selectToDo: (id: app_id) => dispatch(selectAction(id)),
        switchDoneToDo: (id: app_id) => dispatch(toggleDoneAction(id)),
        toggleShowDone: () => dispatch(toggleShowDoneAction()),
    }
}

export const ToDoListHOC = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
