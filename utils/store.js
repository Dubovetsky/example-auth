'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from 'reducers';

/*const loggerMiddleware = createLogger();*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(
        thunkMiddleware,
        /*loggerMiddleware*/
    )
));

export default store;