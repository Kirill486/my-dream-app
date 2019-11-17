import { IToDo } from "./types";

const toDoInitialTitle = '....Summarize your note....';
const toDoInitialDescription = '....Type here what shoud be done....';

export const createEmptyToDo = (): IToDo => ({
    id: -1,
    createdTime: Date.now(),
    title: toDoInitialTitle,
    description: toDoInitialDescription,
    done: false,
});