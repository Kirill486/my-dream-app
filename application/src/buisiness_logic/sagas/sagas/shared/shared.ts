import { doNothing } from "../../../../domain_types/definitions";
import { Action } from "redux";
import { logger } from "../../../../buisiness_logger/Logger";
import { call, select } from "@redux-saga/core/effects";
import { applicationStorage } from "../../../../buisiness_repository/PermanentStorage";
import { BuisinessLogicBlueprint } from "../../../ancestor/BuisinessLogicBlueprint";

export function* logUseCase (action: Action) {
    yield call(logger.LogOne.bind(logger), getInfo(action));
}

export function* syncModelWithStorage() {
    const appState = yield select();
    yield call(applicationStorage.store.bind(applicationStorage), appState);
}

export function* fireChangedEvent() {
    yield call(BuisinessLogicBlueprint.fireChangedEvent); 
}

const getInfo = (action: Action) => {
    return {
        case: this.useCaseTitle,
        time: Date.now(),
        actionDTO: action,
    }
}
