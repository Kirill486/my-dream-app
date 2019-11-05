export abstract class ModelBlueprint<ApplicationModel> {
    
    state: ApplicationModel;
    
    // return a new object each time
    // to avoid bugs related to unexpected mutation
    public abstract getState(): ApplicationModel;

    public abstract getNextId(): any;
    
    public abstract setState(state: ApplicationModel): void;
}
