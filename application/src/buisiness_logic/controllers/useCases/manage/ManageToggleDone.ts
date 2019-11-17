import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";
import { setToDoList } from "../../../../model/actions/toDoListActions";

interface argsDTO {
    id: any;
}

export class ManageToggleDone extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageToggleDone';

    buisinessLogic(payload: argsDTO) {
        const {toDoList} = this.model.getState();

        const newToDoList = toDoList.map((item) => {
            if (item.id === payload.id) {
                const timeNow = Date.now();
                const doneStatus = !item.done;
                item.done = doneStatus;
                item.savedTime = timeNow;
                if (doneStatus) {
                    item.doneTime = timeNow;
                }
            }
            return item;
        });
        this.model.dispatch(setToDoList(newToDoList));
    }
}
