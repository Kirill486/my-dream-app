import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IToDo, IApplicationState } from "../../../../domain_types/types";
import { setToDoList } from "../../../../model/actions/toDoListActions";

interface argsDTO {
    todos: IToDo[];
}

export class ManageRestoreToDos extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageRestoreToDos';

    buisinessLogic(payload: argsDTO) {
        this.model.dispatch(setToDoList(payload.todos));
    }
}