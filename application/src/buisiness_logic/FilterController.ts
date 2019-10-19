import { FilterSelect } from "./useCases/filter/FilterSelect";
import { appStore } from "../model/Model";
import { FilterToggleShowDone } from "./useCases/filter/FilterToggleShowDone";

// we know exactley what use cases we have

export class FilterController {
    public static select = new FilterSelect(appStore);
    public static toggleShowDone = new FilterToggleShowDone(appStore);  
}