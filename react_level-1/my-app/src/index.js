import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elem = <h2>Hello world!</h2>;
// const elem = React.createElement('h2', { className: 'greetings' }, 'hello world');


const text = 'hello world'

const elem = (
  <div>
    <h2 className='text'>{text}</h2>
    <input type="text" />
    <button tabIndex="0">click</button>
  </div>
);
ReactDOM.render(
  elem,
  document.getElementById('root')
);

