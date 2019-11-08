import { FilterSelect } from "./useCases/filter/FilterSelect";
import { appStore } from "../../model/Model";
import { FilterToggleShowDone } from "./useCases/filter/FilterToggleShowDone";
import { logger } from "../../buisiness_logger/Logger";
import { applicationStorage } from "../../buisiness_repository/PermanentStorage";

// we know exactley what use cases we have

export class FilterController {
    public static select = new FilterSelect(appStore, applicationStorage, logger);
    public static toggleShowDone = new FilterToggleShowDone(appStore, applicationStorage, logger);
}