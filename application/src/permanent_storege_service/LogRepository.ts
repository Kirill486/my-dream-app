import { RepositoryBlueprint } from "./ancestor/RepositoryBlueprint";
import { applicationRepository } from "./ApplicationRepository";

interface LogData {
    logQuenue: [],
}

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