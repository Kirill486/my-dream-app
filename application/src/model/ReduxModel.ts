import { ModelBlueprint } from "./ancestor/ModelBlueprint";
import { IApplicationState } from "../domain_types/types";
import { Store, Action } from "redux";
import { doNothing } from "../domain_types/definitions";
import uuid = require("uuid");

export class ReduxModel extends ModelBlueprint<IApplicationState> {
    
    private store: Store<IApplicationState>;

    constructor(appStore: Store<IApplicationState>) {
        super();
        this.store = appStore;
    }

    public dispatch(action: Action): void {
        this.store.dispatch(action);
    }

    public getState(): IApplicationState {
        return this.store.getState();
    }

    public setState() {
        throw new Error('Not implemented');
    }

    public findLastId() {
        doNothing(); 
    }

    public getNextId() {
        return uuid.v4();
    }
}