import { RepositoryBlueprint } from "../repository/ancestor/RepositoryBlueprint";
import { LogData } from "../domain_types/types";
import { loggingRepository } from "../repository/LogRepository";
import { LoggingService } from "../logging_service/LoggingService";

export class Logger {

    private loggingRepository: RepositoryBlueprint<LogData>;
    
    constructor(repository: RepositoryBlueprint<LogData>) {
        this.loggingRepository = repository;
    }

    async LogOne(log: any) {
        LoggingService.logToConsoleTable(log);
        const { logQuenue } = await this.loggingRepository.readStorage();
        const newData = {
            logQuenue: [...logQuenue, log],
        }
        const result = await this.loggingRepository.writeStorage(newData);
        return result;
    }
}

export const logger = new Logger(loggingRepository);
