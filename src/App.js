import React from 'react';
import NavBar from './components/NavBar';

import './App.css'

import blush from './images/blush.webp'

/* REMEMBER: Parentheses will implicitly return!! */
const App = () => (
  <div className='app'>
    <NavBar />
    <h1>Hello World!</h1>
    <img src={blush} alt='blush' />
  </div>
);

export default App;
