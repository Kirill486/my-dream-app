import { IToDo } from "../types";
import { appStore } from "../Model";

const defaultToDo: IToDo = {
    id: -1,
    title: '',
    description: '',
    createdTime: 0,
    done: false,
    doneTime: null,
    savedTime: null,
}

export const makeEmptyToDo =
(): IToDo => {
    const result = Object.assign({}, defaultToDo);

    const createdTime = Date.now();
    const nextId = appStore.getNextId();

    result.createdTime = createdTime;
    result.id = nextId;
    return result;
};
