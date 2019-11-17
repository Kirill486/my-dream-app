import { ActionCreator, Action } from "redux";
import { filtersActionTypes } from "./actionTypes";
import { IPayloadAction, app_id } from "../../domain_types/definitions";

export const toggleShowDone: ActionCreator<Action> =
() => ({
    type: filtersActionTypes.TOGGLE_SHOW_DONE,
});

export const setSelected: ActionCreator<IPayloadAction<app_id>> =
(id: app_id) => ({
    type: filtersActionTypes.SET_SELECTED,
    payload: id,
});