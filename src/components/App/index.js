import React, { Component } from 'react';
import logo from './images/logo.svg';
import './app.css';

const panelItems = '%/X789-456+1230.'.split('');

// Get first 10 panel elements
const panelTopEls = panelItems.filter((el, i) => i <= 10).map(el => <button className="btn-default" key={el}><span>{el}</span></button>);

// Get all the rest elements
const panelBottomEls = panelItems.filter((el, i) => i > 10).map(el => <button className="btn-default" key={el}><span>{el}</span></button>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul className="App-bar-icons">
            <li></li><li></li><li></li>
          </ul>

          <div className="App-results-container">
            <span className="App-history">33x2</span>
            <span className="App-result">66</span>
          </div>
        </header>

        <section className="App-panel">

          <div className="App-top-panel">

          </div>

          <button className="btn-active"><span>C</span></button>
          {panelTopEls}

          <div className="App-bottom-panel">
            <div className="App-bottom-panel-buttons">
              {panelBottomEls}
            </div>

            <div className="App-bottom-panel-active">
              <button className="btn-active"><span>=</span></button>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
