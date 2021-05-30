import { createWrapper } from 'next-redux-wrapper';
import React from 'react'
import {createStore} from 'redux';
import reducer from '../reducers/index';


const configureStore = () => {
    
    const store = createStore(reducer);

    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'boogicho',
    })

    return store;
};


const wrapper = createWrapper(configureStore,{
    debug: process.env.NODE_NEV === 'development',

});

export default wrapper;
