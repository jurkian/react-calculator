import React, { Component } from 'react';
import './app.css';

import CalculatorScreen from '../CalculatorScreen/index';
import CalculatorPanel from '../CalculatorPanel/index';

const panelItems = '%/X789-456+1230.'.split('');
const operators = '%/X-+.'.split('');

class App extends Component {
   constructor() {
      super();

      this.state = { history: '33x2', result: 66 };
   }

   componentWillMount() {
      this.updateHistory('33x2');
      this.updateResult(66);
   }

   render() {
      return (
         <div className="App">
            <CalculatorScreen history={this.state.history} result={this.state.result} updateScreen={this.updateScreen.bind(this)} />
            <CalculatorPanel panelItems={panelItems} updateScreen={this.updateScreen.bind(this)} />
         </div>
      );
   }

   updateScreen(char) {
      if (char === 'C') {
         this.updateHistory('');
         this.updateResult(0);

      } else if (char === '=') {
         this.updateHistory('');
         this.updateResult(66);
         // ...

      } else if (operators.indexOf(char) > -1) {
         this.updateHistory(this.state.history + char);
         // ...

      } else if(char) {
         this.updateHistory(char);
         this.updateResult(char);
      }
   }

   updateHistory(char) {
      this.setState({ history: char });
   }

   updateResult(number) {
      this.setState({ result: number });
   }
}

export default App;
