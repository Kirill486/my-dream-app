import { ActionCreator, Action } from "redux";
import { filterSagaActionTypes } from "./sagaActionTypes";
import { IPayloadAction, app_id } from "../../../domain_types/definitions";

export const selectAction: ActionCreator<IPayloadAction<app_id>> =
(id: app_id) => ({
    type: filterSagaActionTypes.select,
    payload: id,
});

export const toggleShowDoneAction: ActionCreator<Action> =
() => ({
    type: filterSagaActionTypes.toggleShowDone,
});
