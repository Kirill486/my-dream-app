import { combineReducers, createStore, Store, applyMiddleware } from "redux";
import { filtersReducer } from "./reducers/filtersReducer";
import { toDoListReducer } from "./reducers/toDoListReducer";
import { miscReducer } from "./reducers/miscReducer";
import { IApplicationState } from "../domain_types/types";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../buisiness_logic/sagas/rootSaga";

const applicationReducer = combineReducers({
    toDoList: toDoListReducer,
    filters: filtersReducer,
    misc: miscReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const applicationModel: Store<IApplicationState> = createStore(applicationReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
