import { Action } from "redux";
import { app_id } from "../../domain_types/definitions";

export abstract class ModelBlueprint<ApplicationModel> {
    
    state: ApplicationModel;

    public abstract shouldManuallySync: boolean;
    
    // return a new object each time
    // to avoid bugs related to unexpected mutation
    public abstract getState(): ApplicationModel;

    public abstract getNextId(): app_id;
    public abstract findLastId(): void;
    
    public abstract setState(state: ApplicationModel): void;
    public abstract dispatch(action: Action): void;
}
