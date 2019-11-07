import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

import 'typeface-roboto';

import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
