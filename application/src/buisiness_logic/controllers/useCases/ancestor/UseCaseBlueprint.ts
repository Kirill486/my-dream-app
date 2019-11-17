import { ModelBlueprint } from "../../../../model/ancestor/ModelBlueprint";
import { BuisinessLogicBlueprint } from "../../../ancestor/BuisinessLogicBlueprint";
import { Logger } from "../../../../buisiness_logger/Logger";
import { ApplicationStorage } from "../../../../buisiness_repository/ancestor/StorageBlueprint";

// So, after we know whats happening usually in our application use cases we can

export abstract class UseCaseBlueprint<ApplicationState, argsDTO> {
    abstract useCaseTitle: string;
    model: ModelBlueprint<ApplicationState>;
    state: ApplicationState;
    
    logger: Logger;

    // we do not care that much what exact model is used to store data
    storage: ApplicationStorage<ApplicationState>;  

    constructor(
        model: ModelBlueprint<ApplicationState>,
        storage: ApplicationStorage<ApplicationState>,
        loggingService: Logger,        
    ) {
        this.model = model;
        this.logger = loggingService;
        this.storage =storage;
    }

    abstract buisinessLogic(payloadDTO: argsDTO);

    public use(payloadDTO: argsDTO) {


        // map buisiness logic to rootSaga

        // this.state = this.model.getState(); no longer need this
        // this.buisinessLogic(payloadDTO); our buisiness logic is in the sagas now
        // this.syncModel(); this will be done for us automatically
        // this.onModelSynq(); this will be part of saga
        // this.logUseCase(payloadDTO);
        // this.syncModelWithStorage(this.model.getState());
        // BuisinessLogicBlueprint.fireChangedEvent();
    }

    private syncModel() {
        if (this.model.shouldManuallySync) {
            this.model.setState(this.state);
        }
    }

    onModelSynq() {
        // no action by default
    }

    // private logUseCase(dto: argsDTO) {
    //     this.logger.LogOne(this.getInfo(dto));        
    // } 

    // private syncModelWithStorage(state: ApplicationState) {
    //     this.storage.store(state);
    // }

    // private getInfo(dto: argsDTO) {
    //     return {
    //         case: this.useCaseTitle,
    //         time: Date.now(),
    //         actionDTO: dto,
    //     }
    // }
}