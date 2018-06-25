import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './redux/store';

const store = createStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
