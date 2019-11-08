import { RepositoryBlueprint } from "../permanent_storege_service/ancestor/RepositoryBlueprint";
import { LogData } from "../domain_types/types";
import { loggingRepository } from "../permanent_storege_service/LogRepository";

export class Logger {
    private loggingRepository: RepositoryBlueprint<LogData>;
    
    constructor(repository: RepositoryBlueprint<LogData>) {
        this.loggingRepository = repository;
    }

    async LogOne(log: any) {
        const { logQuenue } = await this.loggingRepository.readStorage();
        const newData = {
            logQuenue: [...logQuenue, log],
        }
        const result = await this.loggingRepository.writeStorage(newData);
        return result;
    }
}

export const logger = new Logger(loggingRepository);
