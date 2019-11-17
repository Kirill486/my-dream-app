import { Action } from "redux";
import { call, select, put } from "@redux-saga/core/effects";
import { logger } from "../../../../buisiness_logger/Logger";
import { createEmptyToDo } from "../../../../domain_types/domain_fabric";
import { setToDoList } from "../../../../model/actions/toDoListActions";
import { IPayloadAction, app_id } from "../../../../domain_types/definitions";
import { IToDo } from "../../../../domain_types/types";

export function* add (action: Action) {
    yield call(logger.LogOne.bind(logger), `add`);
    const emptyToDo = createEmptyToDo();
    const {toDoList} = yield select();
    const newToDoState = [...toDoList, emptyToDo];
    yield put(setToDoList(newToDoState));     
}

export function* remove (action: IPayloadAction<app_id>) {
    yield call(logger.LogOne.bind(logger), `remove`);
    const {toDoList} = yield select();
    const newList = toDoList.filter((item) => item.id !== action.payload);
    yield put(setToDoList(newList));
}

export function* toggleDone (action: Action) {
    yield call(logger.LogOne.bind(logger), `toggleDone`);

    const {toDoList} = yield select();
    const {payload: id} = (action as IPayloadAction<app_id>)

    const newToDoList = toDoList.map((item) => {
        if (item.id === id) {
            const timeNow = Date.now();
            const doneStatus = !item.done;
            item.done = doneStatus;
            item.savedTime = timeNow;
            if (doneStatus) {
                item.doneTime = timeNow;
            }
        }
        return item;
    }); 

    yield put(setToDoList(newToDoList));
}

export function* save (action: Action) {
    yield call(logger.LogOne.bind(logger), `save`);

    const {toDoList} = yield select();
    const toDoToSave = (action as IPayloadAction<IToDo>).payload;
    const newList = toDoList.map((item) => {
        if (item.id !== toDoToSave.id) {
            return item;
        } else {
            return toDoToSave;
        }
    });
    yield put(setToDoList(newList));
}

export function* restore (action: Action) {
    yield call(logger.LogOne.bind(logger), `restore`);
    const toDoAction = action as IPayloadAction<IToDo[]>
    yield put(setToDoList(toDoAction.payload));
}