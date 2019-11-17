import { ModelBlueprint } from "./ancestor/ModelBlueprint";
import { IApplicationState } from "../domain_types/types";
import { LoggingService } from "../logging_service/LoggingService";

const initialState: IApplicationState = {
    filters: {
        selected: null,
        showDone: true,
    },
    toDoList: [],
    misc: {
        isModelSyncronized: true, // not implemented yet
        logQuenue: [], // not implemented yet
    }
}

let nextId = 1

export class ApplicationModel extends ModelBlueprint<IApplicationState> {
    // private state: S;

    constructor(initialState) {
        super();
        this.state = initialState;
    }

    // I feel like we need a ModelControllerHere.
    public findLastId(): void {
        let lastId = nextId;
        this.state.toDoList.forEach((item) => {
            if (item.id > lastId) {
                lastId = item.id;
            }
        });
        nextId = lastId + 1;
    }

    public getNextId(): number {
        return nextId++;
    }

    public getState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    public setState(state) {
        this.state = state;
        LoggingService.logToConsoleTable(state);
    }

    public dispatch() {
        // old model does not provide any action-based API
        throw new Error('Dispatch is not implemented');
    }
}

export const appStore = new ApplicationModel(initialState);
