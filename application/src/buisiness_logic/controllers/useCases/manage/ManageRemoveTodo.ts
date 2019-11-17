import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";
import { setToDoList } from "../../../../model/actions/toDoListActions";

interface argsDTO {
    id: any;
}

export class ManageRemoveTodo extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageRemoveToDo';

    buisinessLogic(payload: argsDTO) {
        const currentList = this.model.getState().toDoList;
        const newList = currentList.filter((item) => item.id !== payload.id);
        this.model.dispatch(setToDoList(newList));
    }
}
