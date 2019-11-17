import { IApplicationState, IFilterState } from "../../domain_types/types";
import {Action} from 'redux';
import { filtersActionTypes } from "../actions/actionTypes";
import { IPayloadAction, app_id } from "../../domain_types/definitions";

const filtersInitialState: IFilterState = {
    selected: null,
    showDone: true,
}

export const filtersReducer =
(
    state: IFilterState = filtersInitialState,
    action: Action,
) => {
    switch (action.type) {

        case filtersActionTypes.SET_SELECTED: {
            const idAction = action as IPayloadAction<app_id>;
            const newState = {
                ...state,
                selected: idAction.payload,
            }
            return newState;
        }

        case filtersActionTypes.TOGGLE_SHOW_DONE: {
            const newState = {
                ...state,
                showDone: !state.showDone,
            }
            return newState;
        }

        default: {
            return state;
        }
    }
}