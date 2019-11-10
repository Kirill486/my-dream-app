import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";

interface argsDTO {
    id: any;
}

export class ManageToggleDone extends UseCaseBlueprint<IApplicationState, argsDTO> {
    useCaseTitle = 'ManageRemoveToDo';

    buisinessLogic(payload: argsDTO) {
        this.state.toDoList = this.state.toDoList.map((item) => {
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
        })
    }
}
