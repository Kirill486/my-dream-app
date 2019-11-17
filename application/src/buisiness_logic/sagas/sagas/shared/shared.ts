import { doNothing } from "../../../../domain_types/definitions";
import { Action } from "redux";
import { logger } from "../../../../buisiness_logger/Logger";
import { call, select } from "@redux-saga/core/effects";
import { applicationStorage } from "../../../../buisiness_repository/PermanentStorage";

export function* logUseCase (action: Action) {
    yield call(logger.LogOne.bind(logger), getInfo(action));
}

export function* syncModelWithStorage() {
    const appState = select();
    yield call(applicationStorage.store.bind(applicationStorage), appState);
}

const getInfo = (action: Action) => {
    return {
        case: this.useCaseTitle,
        time: Date.now(),
        actionDTO: action,
    }
}
