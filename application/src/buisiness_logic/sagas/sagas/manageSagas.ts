import { Action } from "redux";
import { call } from "@redux-saga/core/effects";
import { logger } from "../../../buisiness_logger/Logger";

export function* add (action: Action) {
    yield call(logger.LogOne.bind(logger), `add`);
    // yield put(statusMessage(statusMessages.LOADING));
}

export function* remove (action: Action) {
    yield call(logger.LogOne.bind(logger), `remove`);
    // yield put(statusMessage(statusMessages.LOADING));
}

export function* toggleDone (action: Action) {
    yield call(logger.LogOne.bind(logger), `toggleDone`);
    // yield put(statusMessage(statusMessages.LOADING));
}

export function* save (action: Action) {
    yield call(logger.LogOne.bind(logger), `save`);
    // yield put(statusMessage(statusMessages.LOADING));
}

export function* restore (action: Action) {
    yield call(logger.LogOne.bind(logger), `restore`);
    // yield put(statusMessage(statusMessages.LOADING));
}