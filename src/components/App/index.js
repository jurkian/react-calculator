import React, { Component } from 'react';
import logo from './images/logo.svg';
import './app.css';

const panelItems = '%/X789-456+1230.'.split('');
const panelEls = panelItems.map(el => <button key={el}><span>{el}</span></button>);

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

          <button className="active"><span>C</span></button>
          {panelEls}
          <button className="active"><span>=</span></button>
          
        </section>
      </div>
    );
  }
}

export default App;
