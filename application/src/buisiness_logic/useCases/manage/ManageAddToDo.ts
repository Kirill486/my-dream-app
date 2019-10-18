import { IToDo, IApplicationState } from "../../../model/types";
import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";

interface argsDTO {
    todos: IToDo[];
}

export class ManageAddToDo extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageAddToDo';

    buisinessLogic(payload) {
        this.state.toDoList = [...this.state.toDoList, ...payload.todos];
    }
}
