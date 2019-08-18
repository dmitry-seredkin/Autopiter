// import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App/App';
import './components/App/App.scss'

const title = 'React  with Webpack and Babel';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

// module.hot.accept();