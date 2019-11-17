import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";
import { createEmptyToDo } from "../../../../domain_types/domain_fabric";
import { setToDoList } from "../../../../model/actions/toDoListActions";

export class ManageAddToDo extends UseCaseBlueprint<IApplicationState, {}> {
    useCaseTitle = 'ManageAddToDo';

    static toDoInitialTitle = '....Summarize your note....';
    static toDoInitialDescription = '....Type here what shoud be done....';

    buisinessLogic() {
        const emptyToDo = createEmptyToDo();
        const currentList = this.model.getState().toDoList;
        const newToDoState = [...currentList, emptyToDo];
        this.model.dispatch(setToDoList(newToDoState));     
    }    
}
