import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IToDo, IApplicationState } from "../../../../domain_types/types";
import { createEmptyToDo } from "../../../../domain_types/domain_fabric";

export class ManageAddToDo extends UseCaseBlueprint<IApplicationState, {}> {
    useCaseTitle = 'ManageAddToDo';

    static toDoInitialTitle = '....Summarize your note....';
    static toDoInitialDescription = '....Type here what shoud be done....';

    private createEmptyToDo() {
        const id = this.model.getNextId();

        const todo: IToDo = {
            ...createEmptyToDo(),
            id,
        } 
        return todo;
    }

    buisinessLogic() {

        this.state.toDoList = [...this.state.toDoList, this.createEmptyToDo()];
    }    
}
