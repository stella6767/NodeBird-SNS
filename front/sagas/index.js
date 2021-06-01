import { all, call, delay, fork, put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

//중단점이 있는 함수(제너레이터)
export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
