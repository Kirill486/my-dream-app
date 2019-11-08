import { ManageAddToDo } from "./useCases/manage/ManageAddToDo";
import { appStore } from "../../model/Model";
import { ManageRemoveTodo } from "./useCases/manage/ManageRemoveTodo";
import { ManageToggleDone } from "./useCases/manage/ManageToggleDone";
import { ManageSaveToDo } from "./useCases/manage/ManageSaveToDo";
import { applicationStorage } from "../../buisiness_repository/PermanentStorage";
import { logger } from "../../buisiness_logger/Logger";

export class ManageController {
    public static add = new ManageAddToDo(appStore, applicationStorage, logger);
    public static remove = new ManageRemoveTodo(appStore, applicationStorage, logger);
    public static toggleDone = new ManageToggleDone(appStore, applicationStorage, logger);
    public static  save = new ManageSaveToDo(appStore, applicationStorage, logger);
}