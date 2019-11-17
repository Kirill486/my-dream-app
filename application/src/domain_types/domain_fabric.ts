import { IToDo } from "./types";
import uuid = require("uuid");

const toDoInitialTitle = '....Summarize your note....';
const toDoInitialDescription = '....Type here what shoud be done....';

export const createEmptyToDo = (): IToDo => ({
    id: uuid.v4(),
    createdTime: Date.now(),
    title: toDoInitialTitle,
    description: toDoInitialDescription,
    done: false,
});