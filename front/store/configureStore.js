import { createWrapper } from 'next-redux-wrapper';
import React from 'react'
import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    //   if (typeof action === 'function') {
    //     return action(dispatch, getState);
    //   }
    console.log(action);
  
      return next(action);
    };
  


const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    //프로덕션 모드일 때는 devtools 적용안함 ,  보안 문제와 최적화 문제 때문에
    const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)): composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};


const wrapper = createWrapper(configureStore,{
    debug: process.env.NODE_ENV === 'development',

});

export default wrapper;
