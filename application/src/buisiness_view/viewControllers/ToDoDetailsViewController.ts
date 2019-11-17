import { IApplicationState, IToDo } from "../../domain_types/types";
import { ITodoDetailsDataVM, ITodoDetailsActionVM } from "../../view/ToDoDetails/types";
import { saveAction, removeAction } from "../../buisiness_logic/sagas/actions/manageSagaActions";
import { app_id } from "../../domain_types/definitions";
import { connect } from "react-redux";
import { ToDoDetails } from "../../view/ToDoDetails/ToDoDetails";

const selectToDo =
(
    state: IApplicationState,    
) => {
    const id = state.filters.selected;
        if (id) {
            const correspondingToDo = state.toDoList.find((item) => item.id === id);
            return correspondingToDo;
        }

    return null;
}

export const mapStateToProps =
(
    state: IApplicationState,
): ITodoDetailsDataVM => {
    return {
        selectedToDo: selectToDo(state),
    }
}

export const mapDispatchToProps =
(
    dispatch: any,
): ITodoDetailsActionVM => {
    return {
        saveToDo: (todo: IToDo) => dispatch(saveAction(todo)),
        removeToDo: (id: app_id) => dispatch(removeAction(id)),
    }
}

export const ToDoDetailsHOC = connect(mapStateToProps, mapDispatchToProps)(ToDoDetails);