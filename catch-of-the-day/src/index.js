// let's go!
//We want everything from React
import React  from 'react';
//We only need one method from react dom
import {render} from 'react-dom';

import Router from './components/Router';

import "./css/style.css";



render(<Router/>, document.querySelector('#main'));
