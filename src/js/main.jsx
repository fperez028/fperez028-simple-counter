import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// components
import {SecondsCounter} from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let seconds = 0;

const render = () => {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>
  );
};

// the all zero's render
render();

// Increment and re-render every second
setInterval(() => {
    seconds++;
    render();
}, 1000);