import { Action } from "redux";

export abstract class ModelBlueprint<ApplicationModel> {
    
    state: ApplicationModel;

    public abstract shouldManuallySync: boolean;
    
    // return a new object each time
    // to avoid bugs related to unexpected mutation
    public abstract getState(): ApplicationModel;

    public abstract getNextId(): any;
    public abstract findLastId(): void;
    
    public abstract setState(state: ApplicationModel): void;
    public abstract dispatch(action: Action): void;
}
