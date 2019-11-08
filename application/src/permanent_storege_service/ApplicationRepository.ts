import { RepositoryBlueprint } from "./ancestor/RepositoryBlueprint";
import { IApplicationData } from "../domain_types/types";

const initialApplicationData: IApplicationData = {
    todos: [],
    logQuenue: [],
}

class ApplicationRepository extends RepositoryBlueprint<IApplicationData> {
    
    private key: string = 'ToDoManage';
    
    readStorage() {
        const dataJSON = localStorage.getItem(this.key);
        const parsedData = JSON.parse(dataJSON);

        const data = {
            ...initialApplicationData,
            ...parsedData,
        }

        return Promise.resolve(data); 
    }

    writeStorage(data: IApplicationData) {
        const dataJSON = JSON.stringify(data);

        localStorage.setItem(this.key, dataJSON);
        return Promise.resolve(true);
    }
}

export const applicationRepository = new ApplicationRepository();