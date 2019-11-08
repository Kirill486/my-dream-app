export abstract class RepositoryBlueprint<Data> {
    abstract async readStorage(): Promise<Data>;
    abstract async writeStorage(data: Data): Promise<boolean>;
}