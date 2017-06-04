import React, { Component } from 'react';
import logo from './images/logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul className="App-bar-icons">
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <span className="App-history">33x2</span>
          <span className="App-result">66</span>
        </header>

        <section className="App-panel">
          <ul>
            <li className="highlight">C</li>
            <li>%</li>
            <li>/</li>
            <li>X</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>-</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>+</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>0</li>
            <li>.</li>
            <li className="highlight">=</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
