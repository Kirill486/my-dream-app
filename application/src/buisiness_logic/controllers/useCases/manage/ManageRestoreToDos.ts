import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IToDo, IApplicationState } from "../../../../domain_types/types";

interface argsDTO {
    todos: IToDo[];
}

export class ManageRestoreToDos extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageRestoreToDos';

    buisinessLogic(payload: argsDTO) {
        this.state.toDoList = payload.todos;
    }
}