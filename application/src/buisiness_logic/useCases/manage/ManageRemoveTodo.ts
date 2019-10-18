import { IApplicationState } from "../../../model/types";
import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";

interface argsDTO {
    id: any;
}

export class ManageRemoveTodo extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageRemoveToDo';

    buisinessLogic(payload: argsDTO) {
        this.state.toDoList = this.state.toDoList.filter((item) => item.id !== payload.id);
    }
}
