import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/root-reducers';
import logger from 'redux-logger';


const middlewares = [thunk, logger];


const store = createStore(rootReducers, applyMiddleware(...middlewares));


export default store;