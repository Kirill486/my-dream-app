export abstract class StorageBlueprint<StorageState> {
    abstract async readStorage(): Promise<StorageState>;
    abstract async writeStorage(): Promise<boolean>;
}