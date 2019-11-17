import { Action } from "redux";
import { call, put } from "@redux-saga/core/effects";
import { logger } from "../../../../buisiness_logger/Logger";
import { IPayloadAction, app_id } from "../../../../domain_types/definitions";
import { setSelected } from "../../../../model/actions/filterActions";
import {toggleShowDone as toggleShowDoneModelAction} from '../../../../model/actions/filterActions'

export function* select (action: Action) {
    yield call(logger.LogOne.bind(logger), `select`);
    const {payload: id} = action as IPayloadAction<app_id>;
    yield put(setSelected(id));
}

export function* toggleShowDone (action: Action) {
    yield call(logger.LogOne.bind(logger), `toggleShowDone`);
    yield put(toggleShowDoneModelAction());
}