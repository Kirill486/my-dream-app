import { RepositoryBlueprint } from "../../permanent_storege_service/ancestor/RepositoryBlueprint";

export abstract class StorageBlueprint<ApplicationState, DataModel> {
    abstract mapToModel(state: ApplicationState): DataModel;

    private repository: RepositoryBlueprint<DataModel>;
    constructor(repository: RepositoryBlueprint<DataModel>) {
        this.repository = repository;
    }

    async store(state: ApplicationState) {
        const data = this.mapToModel(state);
        const result = this.repository.writeStorage(data);
        return result;
    }
}