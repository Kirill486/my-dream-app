import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState, IToDo } from "../../../../domain_types/types";

interface argsDTO {
    todo: IToDo;
}

export class ManageSaveToDo extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageSaveToDo';

    buisinessLogic(payload: argsDTO) {
        this.state.toDoList = this.state.toDoList.map((item) => {
            if (item.id !== payload.todo.id) {
                return item;
            } else {
                return payload.todo;
            }
        });
    };
}
