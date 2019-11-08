import { IToDoData, IApplicationState } from "../domain_types/types";
import { StorageBlueprint } from "./ancestor/StorageBlueprint";
import { dataRepository } from "../permanent_storege_service/ToDoRepository";

class PermanentStorage extends StorageBlueprint<IApplicationState, IToDoData> {
    mapToModel(state: IApplicationState) {
        const result: IToDoData = {
            todos: state.toDoList,
        }
        return result;
    }
}

export const applicationStorage = new PermanentStorage(dataRepository);