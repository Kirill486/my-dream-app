import { Action } from "redux";
import { call } from "@redux-saga/core/effects";
import { logger } from "../../../buisiness_logger/Logger";

export function* select (action: Action) {
    yield call(logger.LogOne.bind(logger), `select`);
    // yield put(statusMessage(statusMessages.LOADING));
}

export function* toggleShowDone (action: Action) {
    yield call(logger.LogOne.bind(logger), `toggleShowDone`);
    // yield put(statusMessage(statusMessages.LOADING));
}