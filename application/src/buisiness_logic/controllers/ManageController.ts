import { ManageAddToDo } from "./useCases/manage/ManageAddToDo";
import { appStore } from "../../model/Model";
import { ManageRemoveTodo } from "./useCases/manage/ManageRemoveTodo";
import { ManageToggleDone } from "./useCases/manage/ManageToggleDone";

export class ManageController {
    public static add = new ManageAddToDo(appStore);
    public static remove = new ManageRemoveTodo(appStore);
    public static toggleDone = new ManageToggleDone(appStore);
}