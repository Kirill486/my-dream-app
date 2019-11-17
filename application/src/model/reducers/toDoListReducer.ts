import { IToDo } from "../../domain_types/types";
import { Action } from "redux";
import { toDoListActionTypes } from "../actions/actionTypes";
import { IPayloadAction } from "../../domain_types/definitions";

const toDoListInitialState = [];

export const toDoListReducer =
(
    state: IToDo[] = toDoListInitialState,
    action: Action,
) => {
    switch (action.type) {
        case toDoListActionTypes.SET: {
            const listAction = action as IPayloadAction<IToDo[]>;
            return listAction.payload;
        }

        default: {
            return state;
        }
    }
}