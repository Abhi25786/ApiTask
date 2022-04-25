import {applyMiddleware, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
const middlewares = [thunk];

export default legacy_createStore(reducer,applyMiddleware(...middlewares) );

// import { legacy_createStore } from "redux";
