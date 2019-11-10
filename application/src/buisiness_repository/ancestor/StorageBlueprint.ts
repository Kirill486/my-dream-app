import { RepositoryBlueprint } from "../../repository/ancestor/RepositoryBlueprint";

export type ApplicationStorage<ApplicationState> = StorageBlueprint<ApplicationState, any>;

export abstract class StorageBlueprint<ApplicationState, DataModel> {
    abstract mapToModel(state: ApplicationState): DataModel;

    private repository: RepositoryBlueprint<DataModel>;
    constructor(repository: RepositoryBlueprint<DataModel>) {
        this.repository = repository;
    }

    async store(state: ApplicationState) {
        const data = this.mapToModel(state);
        const result = await this.repository.writeStorage(data);
        return result;
    }

    async get() {
        const data = await this.repository.readStorage();
        return data;
    }
}