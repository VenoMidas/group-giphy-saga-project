import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// Add imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_GIPHY', fetchGiphy);
    yield takeEvery('FETCH_FAVORITE', fetchFavorite);
    yield takeEvery('UPDATE_CATEGORY', updateCategory);
}

// function*
function* fetchGiphy() {
    // get gifs
    try {
        const giphyArray = yield axios.get('/api/');
        console.log('get all:', giphyArray.data);
        yield put({ type: 'SET_GIPHY', payload: giphyArray.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchFavorite() {
    // get favorites
    try {
        const favoriteArray = yield axios.get('/api/favorite');
        console.log('get favorites:', favoriteArray.data);
        yield put({ type: 'SET_FAVORITE', payload: favoriteArray.data });
    } catch {
        console.log('get favorites error');
    }
}

function* updateCategory() {
    try {
        const category = yield axios.put(`/api/favorite/${id}`);
        yield put({ type: 'UPDATE_CATEGORY'});
    } catch {
        console.log('Error updating category');
    }
}

// Create sagaMiddlware
const sagaMiddleware = createSagaMiddleware();

// Reducers
// Used to store gifs
const giphyList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIPHY':
            return action.payload;
        default:
            return state;
    }
}

// Used to store favorites
const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        giphyList,
        favoriteList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSage into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

