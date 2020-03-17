import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './App';

//connect app to dev tools, with use compose to combine middleware

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//data is in store for 'global app use', reducer will take the action and return the new updated store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


//store needs to be passed to the provider to give app access to store
ReactDOM.render(
    < Provider store={store} >
        <App />
    </ Provider>
,document.getElementById('root'));

