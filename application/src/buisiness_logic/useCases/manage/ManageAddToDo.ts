import { IToDo, IApplicationState } from "../../../model/types";
import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";

export class ManageAddToDo extends UseCaseBlueprint<IApplicationState, {}> {
    useCaseTitle = 'ManageAddToDo';

    static toDoInitialTitle = '....Summarize your note....';
    static toDoInitialDescription = '....Type here what shoud be done....';

    private createEmptyToDo() {
        const id = this.state.misc.nextId;
        const createdTime = Date.now();
        const title = ManageAddToDo.toDoInitialTitle;
        const description = ManageAddToDo.toDoInitialDescription;
        const todo: IToDo = {
            id,
            createdTime,
            title,
            description,
            done: false,
        }
        return todo;
    }

    buisinessLogic() {
        this.state.toDoList = [...this.state.toDoList, this.createEmptyToDo()];
    }    
}
