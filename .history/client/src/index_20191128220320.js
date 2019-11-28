import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './web/App';
import * as serviceWorker from './web/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
