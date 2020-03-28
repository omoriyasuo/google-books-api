import { all, fork } from 'redux-saga/effects'
import { GoogleBooksSaga } from './GoogleBooks'

export const rootSaga = function* root() {
  yield all([fork(GoogleBooksSaga)])
}
