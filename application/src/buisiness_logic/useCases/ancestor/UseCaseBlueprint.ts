import { ModelBlueprint } from "../../../model/ancestor/ModelBlueprint";

// So, after we know whats happening usually in our application use cases we can

export abstract class UseCaseBlueprint<ApplicationState, argsDTO> {
    abstract useCaseTitle: string;
    model: ModelBlueprint<ApplicationState>;
    state: ApplicationState;

    constructor(
        model: ModelBlueprint<ApplicationState>,         
    ) {
        this.model = model;
        // Here we will add 
        // StorageService
        // LoggingService
        // its jut not the priority now.
    }

    abstract buisinessLogic(payloadDTO: argsDTO);

    public use(payloadDTO: argsDTO) {
        this.state = this.model.getState();
        this.buisinessLogic(payloadDTO);
        this.syncModel();
        this.syncModelWithStorage();
        this.logUseCase();
    }

    private syncModel() {
        this.model.setState(this.state);
    }

    private logUseCase() {
        // Here we'll add our model - storage synkhronization code
    } 

    private syncModelWithStorage() {
        // Here we'll add our model - storage synkhronization code
    }    
}