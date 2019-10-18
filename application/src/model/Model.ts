import { ModelBlueprint } from "./ancestor/ModelBlueprint";
import { IApplicationState } from "./types";

const initialState: IApplicationState = {
    filters: {
        selected: null,
        showDone: true,
    },
    toDoList: [],
}

class ApplicationModel<S> extends ModelBlueprint<S> {
    private state: S;

    constructor(initialState) {
        super();
        this.state = initialState;
    }

    public getState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    public setState(state: S) {
        this.state = state;
    }
}

export const appStore = new ApplicationModel<IApplicationState>(initialState);
