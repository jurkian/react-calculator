import React, { Component } from 'react';
import './screen.css';

class CalculatorScreen extends Component {
   render() {
      return (
         <header className="Screen-header">
            <ul className="Screen-bar-icons">
               <li></li><li></li><li></li>
            </ul>

            <div className="Screen-results-container">
               <span className="Screen-history">33x2</span>
               <span className="Screen-result">66</span>
            </div>
         </header>
      );
   }
}

export default CalculatorScreen;