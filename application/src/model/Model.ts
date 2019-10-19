import { ModelBlueprint } from "./ancestor/ModelBlueprint";
import { IApplicationState } from "./types";

const initialState: IApplicationState = {
    filters: {
        selected: null,
        showDone: true,
    },
    toDoList: [],
    misc: {
        nextId: 1,
        isModelSyncronized: true, // not implemented yet
        logQuenue: [], // not implemented yet
    }
}

class ApplicationModel extends ModelBlueprint<IApplicationState> {
    // private state: S;

    constructor(initialState) {
        super();
        this.state = initialState;
    }

    public getNextId(): number {
        const nextId = this.state.misc.nextId;
        this.state.misc.nextId++;
        return nextId;
    }

    public getState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    public setState(state) {
        this.state = state;
    }
}

export const appStore = new ApplicationModel(initialState);
