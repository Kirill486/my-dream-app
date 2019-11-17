import { logger } from "../../buisiness_logger/Logger"
import { call, takeEvery, select } from "@redux-saga/core/effects";
import { sagaActionTypes, manageActionTypes, filterSagaActionTypes } from "./actions/sagaActionTypes";
import { add, remove, restore, save, toggleDone } from "./sagas/manageSagas";

export function* rootSaga() {
    
    // manage controller
    yield takeEvery(manageActionTypes.add, add);
    yield takeEvery(manageActionTypes.remove, remove);
    yield takeEvery(manageActionTypes.restore, restore);
    yield takeEvery(manageActionTypes.save, save);
    yield takeEvery(manageActionTypes.toggleDone, toggleDone);

    // filter controller
    yield takeEvery(filterSagaActionTypes.select, select);
    yield takeEvery(filterSagaActionTypes.toggleShowDone, select);    
}
