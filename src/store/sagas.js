import { takeEvery, put, call} from 'redux-saga/effects'

import { default as exchanges } from '../exchanges.json'
import { REQUESTS_DATA, addData } from './action'

export function* sagaWatcher() {
    yield takeEvery(REQUESTS_DATA,sagaWorker)
}   

function* sagaWorker() {
    try {
        const payload = yield call(fetchData)
        yield put(addData(payload))
    } catch (e) {
        throw new Error(e)
    }
}

function fetchData() {
    return exchanges.exchanges
}
