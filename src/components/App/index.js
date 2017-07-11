import React, { Component } from 'react';
import './app.css';

import CalculatorScreen from '../CalculatorScreen/index';
import CalculatorPanel from '../CalculatorPanel/index';

const panelItems = '%/x789-456+1230.'.split('');
const operators = '%/x-+';
let isCalculating = true;

class App extends Component {
   constructor() {
      super();

      this.state = { history: '', inputValue: 0 };
   }

   componentWillMount() {
      this.updateHistory('');
      this.updateResult(0);
   }

   render() {
      return (
         <div className="App">
            <CalculatorScreen history={this.state.history} inputValue={this.state.inputValue} />
            <CalculatorPanel panelItems={panelItems} updateScreen={this.updateScreen.bind(this)} />
         </div>
      );
   }

   updateScreen(char) {
      if (char === 'C') {

         // Clear
         this.updateHistory('');
         this.updateResult(0);

         isCalculating = false;

      } else if (char === '=') {

         // If there is anything to calculate
         if (this.state.history) {
            // Show total value
            this.calculateTotal(this.state.history);

            isCalculating = false;
         }

      } else if (operators.includes(char)) {
         this.updateHistory(this.state.history + ` ${char} `);
         this.updateResult(0);

      } else if (char) {

         if (!isCalculating) {
            this.updateResult(0);
            isCalculating = true;
         }

         // If . is pressed and there is no number, make it '0.'
         if (char === '.' && this.state.inputValue === 0) {
            this.updateResult('0.');
            this.updateHistory(this.state.history + '0.');
            
         // If there is 0, replace it with new number
         // If there is a number, add a new one next to it
         } else {
            (this.state.inputValue === 0) ? this.updateResult(char) : this.updateResult(this.state.inputValue + char);
            this.updateHistory(this.state.history + char);
         }


      }
   }

   updateHistory(char) {
      this.setState({ history: char });
   }

   updateResult(value) {
      this.setState({ inputValue: value });
   }

   calculateTotal(str) {

      // Replace x with * and remove spaces
      str = str.replace(/X/g, '*');
      str = str.replace(/x/g, '*');
      str = str.replace(/ /g, '');

      // Check for safety (eval)
      str = str.replace(/[^-()\d/*+%.]/g, '');

      this.updateResult(eval(str).toFixed(3));
      this.updateHistory('');
   }
}

export default App;
