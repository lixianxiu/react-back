import React from 'react';
import ReactDOM from 'react-dom';
import './mock/index'
import './mock/data2'
// import App from './App';
import AppRouter from  './router/AppRouter'

// store 
import { Provider} from 'react-redux';
import configureStore from './store'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
     <AppRouter/>
  </Provider>
  ,
  document.getElementById('root')
);

