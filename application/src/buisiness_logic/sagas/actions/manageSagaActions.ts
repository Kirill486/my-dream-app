import { ActionCreator, Action } from "redux"
import { IPayloadAction, app_id } from "../../../domain_types/definitions"
import { manageActionTypes } from "./sagaActionTypes"
import { IToDo } from "../../../domain_types/types"

export const addAction: ActionCreator<Action> =
() => ({
    type: manageActionTypes.add,
})

export const removeAction: ActionCreator<IPayloadAction<any>> =
(id: app_id) => ({
    type: manageActionTypes.remove,
    payload: id,
})

export const toggleDoneAction: ActionCreator<IPayloadAction<app_id>> =
(id: app_id) => ({
    type: manageActionTypes.toggleDone,
    payload: id,
})

export const saveAction: ActionCreator<IPayloadAction<IToDo>> =
(todo: IToDo) => ({
    type: manageActionTypes.save,
    payload: todo,
})

export const restoreAction: ActionCreator<IPayloadAction<IToDo[]>> =
(todos: IToDo[]) => ({
    type: manageActionTypes.restore,
    payload: todos,
})
