import { takeEvery, call, takeLatest} from "@redux-saga/core/effects";
import { manageActionTypes, filterSagaActionTypes } from "./actions/sagaActionTypes";
import { add, remove, restore, save, toggleDone } from "./sagas/useCase/manageSagas";
import { select, toggleShowDone } from "./sagas/useCase/filterSagas";
import { logUseCase, syncModelWithStorage, fireChangedEvent } from "./sagas/shared/shared";
import { toggleDoneAction } from "./actions/manageSagaActions";

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
    yield takeEvery(filterSagaActionTypes.toggleShowDone, toggleShowDone);

    yield takeLatest('*', logUseCase);
    yield takeLatest('*', syncModelWithStorage);

}
