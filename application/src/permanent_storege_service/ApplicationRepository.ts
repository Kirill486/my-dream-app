import { RepositoryBlueprint } from "./ancestor/RepositoryBlueprint";
import { IApplicationData, IApplicationDataPartialDTO } from "../domain_types/types";

const initialApplicationData: IApplicationData = {
    todos: [],
    logQuenue: [],
}

class ApplicationRepository extends RepositoryBlueprint<IApplicationData> {
    
    private key: string = 'ToDoManage';
    
    readStorage() {
        const data = this.getData();
        return Promise.resolve(data); 
    }

    writeStorage(data: IApplicationDataPartialDTO) {

        const repositoryData = this.getData();
        
        const mergedData = {
            ...repositoryData,
            ...data,
        }
        const dataJSON = JSON.stringify(mergedData);
        localStorage.setItem(this.key, dataJSON);

        return Promise.resolve(true);
    }

    private getData() {
        const dataJSON = localStorage.getItem(this.key);
        const parsedData = JSON.parse(dataJSON);

        const data = {
            ...initialApplicationData,
            ...parsedData,
        }

        return data;
    }
}

export const applicationRepository = new ApplicationRepository();