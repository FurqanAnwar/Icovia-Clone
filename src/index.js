import React from 'react';
import ReactDom from 'react-dom';
import './style.scss';
import App from './App.jsx';
import {createStore} from 'redux';
import AllReducers from 'src/reducers/AllReducers';
import {Provider} from 'react-redux';

const store = createStore(AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log("Subscriber function", store.getState())
})
ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));