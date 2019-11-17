import { logger } from "../../buisiness_logger/Logger"
import { call } from "@redux-saga/core/effects";

export function* rootSaga() {
    // root saga syntax
    // yield takeEvery(action.type, correspondingSaga);
    yield call(logger.LogOne.bind(logger), `rootSaga`);
}

// correspondingSagasSyntax

// export function* longSaga (action: IAction) {
//     yield call(console.warn, `hello long saga ${action.type}`);
//     yield put(statusMessage(statusMessages.LOADING));
// }