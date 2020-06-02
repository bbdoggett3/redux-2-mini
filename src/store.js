import {createStore, applyMiddleware} from 'redux';
import promisedMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from '../src/ducks/hackerNewsReducer';

export default createStore(hackerNewsReducer, applyMiddleware(promisedMiddleware));