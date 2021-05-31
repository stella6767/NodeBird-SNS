import { all, call, fork, put, take } from 'redux-saga/effects';
import axios from 'axios';

//3

function loginAPI(data, a, b, c) {
  //제너레이터 아님
  return axios.post('/api/login', data);
}

//call은 동기함수 호출, fork 는 비동기함수 호출(요청 보내버리고 바로 다음 거 실행, 블락킹을 안 함.)
function* logIn() {
  try {
    //명시되어있지 않아도 login이라는 함수에 action 객체가 넘어온 거임. call은 특이하게, 인자를 펼처서 보내줌. 첫번째 자리가 함수고, 나머지 자리는 매개변수
    const result = yield call(loginAPI, action.data, a, b, c); //loginAPI의 결과값을 받아서 이펙트 앞에서 call, then(결과값)을 받기 위해서 call(동기) 써주셈!
    yield put({
      //put은 디스패치라고 생각하면 된다. 액션을 실행
      type: 'LOG_IN_REQUEST',
    });
    yield put({
      //put은 디스패치라고 생각하면 된다. 액션을 실행
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (e) {
    yield put({
      //테스트할 때 편하게 하기 위해서 yield 꼭 붙어줘야 됨. next()로 실제로 하나하나 돌려보면서..
      type: 'LOG_IN_FALURE',
      data: e.response.data,
    });
  }
}

//1

function* watchLogin() {
  yield take('LOG_IN_REQUEST', logIn); //로그인이라는 액션이 실행될 때까지 기다리겠다. 액션이 실행되면 login함수 실행, 이벤트 리스너 같은 역할
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST');
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST');
}

//2

//중단점이 있는 함수(제너레이터)
export default function* rootSaga() {
  yield all([
    //all은 배열을 받고 배열 안에 있는 것들을 한 방에 다 실행해줌
    fork(watchLogin), //fork 는 함수를 실행해줌 call이랑 좀 다름
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}
