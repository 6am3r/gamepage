import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import brain from '../images/brain.jpeg'


const GamePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="https://www.w3schools.com/js/js_ajax_http.asp" target="_blank" rel="noreferrer">
            <img src={brain} alt='Brain'></img>
        </Link>
      </header>
    </div>
  )
}

export default GamePage