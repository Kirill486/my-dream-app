import { combineReducers, createStore, Store } from "redux";
import { filtersReducer } from "./reducers/filtersReducer";
import { toDoListReducer } from "./reducers/toDoListReducer";
import { miscReducer } from "./reducers/miscReducer";
import { IApplicationState } from "../domain_types/types";

const applicationReducer = combineReducers({
    toDoList: toDoListReducer,
    filters: filtersReducer,
    misc: miscReducer,
});

export const applicationModel: Store<IApplicationState> = createStore(applicationReducer);
