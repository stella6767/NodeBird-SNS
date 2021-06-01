import { all, delay, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_REQUEST } from '../reducers/user';

// function loginAPI(data, a, b, c) {
//   //제너레이터 아님
//   return axios.post('/api/login', data);
// }

function* watchLogin() {
  console.log('사가 가 실행되는 것은 맞는데..');
  yield takeLatest(LOG_IN_REQUEST, logIn); //로그인이라는 액션이 실행될 때까지 기다리겠다. 액션이 실행되면 login함수 실행, 이벤트 리스너 같은 역할
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST); //take의 치명적인 단점은 1회용.. 1번 밖에 안 받음.. 해결은. while로 true로 감싸거나, 아니면 takeEvery.
} //takeEvery 에서 마지막 것만 실행시키는 게 takeLatest(보통은 이거), 첫번쨰 것만 받고싶으면 takeleading

//call은 동기함수 호출, fork 는 비동기함수 호출(요청 보내버리고 바로 다음 거 실행, 블락킹을 안 함.)
function* logIn(action) {
  try {
    //명시되어있지 않아도 login이라는 함수에 action 객체가 넘어온 거임. call은 특이하게, 인자를 펼처서 보내줌. 첫번째 자리가 함수고, 나머지 자리는 매개변수
    //const result = yield call(loginAPI, action.data, a, b, c); //loginAPI의 결과값을 받아서 이펙트 앞에서 call, then(결과값)을 받기 위해서 call(동기) 써주셈!

    console.log('사가 로그인 ');

    yield delay(1000); //현재 서버가 없기 때문에 가짜로,
    yield put({
      //put은 디스패치라고 생각하면 된다. 액션을 실행
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    console.log('why', e);
    yield put({
      //테스트할 때 편하게 하기 위해서 yield 꼭 붙어줘야 됨. next()로 실제로 하나하나 돌려보면서..
      type: LOG_IN_FAILURE,
      data: e.response.data,
    });
  }
}

export default function* userSaga() {
  yield all([
    fork(watchLogin), //fork 는 함수를 실행해줌 call이랑 좀 다름
    //fork(watchLogOut),
  ]);
}