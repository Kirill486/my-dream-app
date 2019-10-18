import { ManageAddToDo } from "./useCases/manage/ManageAddToDo";
import { appStore } from "../model/Model";
import { ManageRemoveTodo } from "./useCases/manage/ManageRemoveTodo";
import { ManageToggleDone } from "./useCases/manage/ManageToggleDone";

export class ManageController {
    public add = new ManageAddToDo(appStore);
    public remove = new ManageRemoveTodo(appStore);
    public toggleDone = new ManageToggleDone(appStore);
}