import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from '.home/Home.jsx';

window.React = React;

const contentNode = document.getElementById('container');
ReactDOM.render(<Home />, contentNode);