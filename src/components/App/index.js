import React, { Component } from 'react';
import './app.css';

import CalculatorScreen from '../CalculatorScreen/index';
import CalculatorPanel from '../CalculatorPanel/index';

const panelItems = '%/X789-456+1230.'.split('');
const operators = '%/X-+';
let isCalculating = true;

class App extends Component {
   constructor() {
      super();

      this.state = { history: '', inputValue: 0, total: 0 };
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
         this.setState({ total: 0 });

         isCalculating = false;

      } else if (char === '=') {
         // Show total value
         this.updateHistory('');
         this.updateResult(parseFloat(this.state.total) + parseFloat(this.state.inputValue));
         this.setState({ total: 0 });

         isCalculating = false;

      } else if (operators.includes(char)) {
         this.updateHistory(this.state.history + ` ${char} `);

         // parseFloat(88-2-20);

         switch(char) {
            case '%':
               this.setState({ total: parseFloat(this.state.total) % parseFloat(this.state.inputValue) });
               break;

            case '/':
               this.setState({ total: parseFloat(this.state.total) / parseFloat(this.state.inputValue) });
               break;

            case 'X':
               this.setState({ total: parseFloat(this.state.total) * parseFloat(this.state.inputValue) });
               break;

            case '-':
               this.setState({ total: parseFloat(this.state.total) - parseFloat(this.state.inputValue) });
               break;

            case '+':
               this.setState({ total: parseFloat(this.state.total) + parseFloat(this.state.inputValue) });
               break;
         }

         this.updateResult(0);

      } else if (char) {
         this.updateHistory(this.state.history + char);

         if (!isCalculating) {
            this.state.inputValue = 0
            isCalculating = true;
         }

         (this.state.inputValue === 0) ? this.updateResult(char) : this.updateResult(this.state.inputValue + char);
      }
   }

   updateHistory(char) {
      this.setState({ history: char });
   }

   updateResult(number) {
      this.setState({ inputValue: number });
   }
}

export default App;
