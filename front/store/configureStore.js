import { createWrapper } from 'next-redux-wrapper';
import React from 'react'
import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';


const configureStore = () => {

    const middlewares = [];
    //프로덕션 모드일 때는 devtools 적용안함 ,  보안 문제와 최적화 문제 때문에
    const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)): composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);

    return store;
};


const wrapper = createWrapper(configureStore,{
    debug: process.env.NODE_ENV === 'development',

});

export default wrapper;
