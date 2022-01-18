import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const loader = document.querySelector('.loader')!;

// // if you want to show the loader when React loads data again
// const showLoader = () => loader.classList.remove('loader--hide');

// const hideLoader = () => loader.classList.add('loader--hide');
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
