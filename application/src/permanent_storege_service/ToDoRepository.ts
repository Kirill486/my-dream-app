import { RepositoryBlueprint } from "./ancestor/RepositoryBlueprint";
import { IToDoData } from "../domain_types/types";
import { applicationRepository } from "./ApplicationRepository";

export class ToDoRepository extends RepositoryBlueprint<IToDoData> {
    async readStorage() {
        const {todos} = await applicationRepository.readStorage();
        const result: IToDoData = {
            todos,
        }
        return result;
    }

    async writeStorage(data: IToDoData) {
        const result = await applicationRepository.writeStorage(data);
        return result;
    }
}

export const dataRepository = new ToDoRepository();
