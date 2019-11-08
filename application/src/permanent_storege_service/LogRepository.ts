import { RepositoryBlueprint } from "./ancestor/RepositoryBlueprint";
import { applicationRepository } from "./ApplicationRepository";
import { LogData } from "../domain_types/types";

export class LogRepository extends RepositoryBlueprint<LogData> {

    async readStorage() {
        const {logQuenue} = await applicationRepository.readStorage();
        return {
            logQuenue,
        }
    }

    async writeStorage(data: LogData) {
        const result = await applicationRepository.writeStorage(data);
        return result;
    }    
}

export const loggingRepository = new LogRepository();
