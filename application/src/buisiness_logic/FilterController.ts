import { FilterSelect } from "./useCases/filter/FilterSelect";
import { appStore } from "../model/Model";
import { FilterToggleShowDone } from "./useCases/filter/FilterToggleShowDone";

// we know exactley what use cases do we have

export class FilterController {
    public select = new FilterSelect(appStore);
    public toggleShowDone = new FilterToggleShowDone(appStore);  
}