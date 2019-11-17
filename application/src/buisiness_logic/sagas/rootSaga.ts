import { takeEvery, call, select as sagaSelect, takeLatest} from "@redux-saga/core/effects";
import { manageActionTypes, filterSagaActionTypes } from "./actions/sagaActionTypes";
import { add, remove, restore, save, toggleDone } from "./sagas/useCase/manageSagas";
import { select } from "./sagas/useCase/filterSagas";
import { BuisinessLogicBlueprint } from "../ancestor/BuisinessLogicBlueprint";
import { logUseCase, syncModelWithStorage } from "./sagas/shared/shared";

export function* rootSaga() {
    
    // buisiness logic
    // manage controller
    yield takeEvery(manageActionTypes.add, add);
    yield takeEvery(manageActionTypes.remove, remove);
    yield takeEvery(manageActionTypes.restore, restore);
    yield takeEvery(manageActionTypes.save, save);
    yield takeEvery(manageActionTypes.toggleDone, toggleDone);

    // filter controller
    yield takeEvery(filterSagaActionTypes.select, select);
    yield takeEvery(filterSagaActionTypes.toggleShowDone, select);

    yield takeLatest('*', logUseCase);
    yield takeLatest('*', syncModelWithStorage);

    // we still need this
    yield call(BuisinessLogicBlueprint.fireChangedEvent);
}
