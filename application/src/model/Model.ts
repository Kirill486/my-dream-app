import { ModelBlueprint } from "./ancestor/ModelBlueprint";
import { IApplicationState } from "../domain_types/types";

const initialState: IApplicationState = {
    filters: {
        selected: null,
        showDone: true,
        hasUnsavedChanges: false,
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

    public getNextId(): number {
        return nextId++;
    }

    public getState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    public setState(state) {
        this.state = state;
        console.log(state);
    }
}

export const appStore = new ApplicationModel(initialState);
