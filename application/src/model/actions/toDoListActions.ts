import { ActionCreator } from "redux";
import { IPayloadAction } from "../../domain_types/definitions";
import { IToDo } from "../../domain_types/types";
import { toDoListActionTypes } from "./actionTypes";

export const setToDoList: ActionCreator<IPayloadAction<IToDo[]>> =
(todos: IToDo[]) => ({
    type: toDoListActionTypes.SET,
    payload: todos,
});
