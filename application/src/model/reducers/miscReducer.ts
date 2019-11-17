import { IMiscState } from "../../domain_types/types";
import { Action } from "redux";

const initialMiscState: IMiscState = {
    isModelSyncronized: true,
    logQuenue: [],
}

export const miscReducer =
(
    state: IMiscState = initialMiscState,
    action: Action,
) => {
    return state;
}