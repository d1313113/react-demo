import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App.jsx';
import registerServiceWorker from './registerServiceWorker';
// 引入fastClick
import FastClick from 'fastclick';
// 引入flexible即可
import "amfe-flexible";

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
