import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState, IToDo } from "../../../../domain_types/types";
import { setToDoList } from "../../../../model/actions/toDoListActions";

interface argsDTO {
    todo: IToDo;
}

export class ManageSaveToDo extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageSaveToDo';

    buisinessLogic(payload: argsDTO) {
        const {toDoList} = this.model.getState();
        const newList = toDoList.map((item) => {
            if (item.id !== payload.todo.id) {
                return item;
            } else {
                return payload.todo;
            }
        });
        this.model.dispatch(setToDoList(newList));
    };
}
