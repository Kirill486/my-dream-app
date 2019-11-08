import { RepositoryBlueprint } from "./ancestor/RepositoryBlueprint";
import { IToDo } from "../domain_types/types";
import { applicationRepository } from "./ApplicationRepository";

interface IToDoData {
    todos: IToDo[];
}

export class ToDoRepository extends RepositoryBlueprint<IToDoData> {
    async readStorage() {
        const storedData = await applicationRepository.readStorage();
        const result: IToDoData = {
            todos: storedData.todos,
        }
        return Promise.resolve(result);
    }

    async writeStorage(data: IToDoData) {
        const storedData = await applicationRepository.readStorage();
        const newStoredData = {
            ...storedData,
            todos: data.todos,
        }
        const result = await applicationRepository.writeStorage(newStoredData);
        return Promise.resolve(result);
    }
}

export const dataStorage = new ToDoRepository();