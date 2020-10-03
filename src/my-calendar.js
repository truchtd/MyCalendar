import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyCalendar from '../src/MyCalendar/MyCalendar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MyCalendar />
  </React.StrictMode>,
  document.getElementById('root')
);