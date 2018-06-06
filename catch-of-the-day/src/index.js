// let's go!
//We want everything from React
import React  from 'react';
//We only need one method from react dom
import {render} from 'react-dom';

import StorePicker from './components/StorePicker';
import App from './components/app';

import "./css/style.css";



render(<App/>, document.querySelector('#main'));
