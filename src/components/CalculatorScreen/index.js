import React, { Component } from 'react';
import './screen.css';

class CalculatorScreen extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <header className="Screen-header">
            <ul className="Screen-bar-icons">
               <li></li><li></li><li></li>
            </ul>

            <div className="Screen-results-container">
               <span className="Screen-history">{this.props.history}</span>
               <span className="Screen-result">{this.props.result}</span>
            </div>
         </header>
      );
   }
}

export default CalculatorScreen;