export abstract class ModelBlueprint<ApplicationModel> {
    
    // return a new object each time
    // to avoid bugs related to unexpected mutation
    public abstract getState(): ApplicationModel;
    
    public abstract setState(state: ApplicationModel): void;
}
