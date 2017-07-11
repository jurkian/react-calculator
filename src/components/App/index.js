import React, { Component } from 'react';
import './app.css';

import CalculatorScreen from '../CalculatorScreen/index';
import CalculatorPanel from '../CalculatorPanel/index';

const panelItems = '%/X789-456+1230.'.split('');

class App extends Component {
   constructor() {
      super();

      this.state = { history: '33x2', result: 66 };
   }

   componentWillMount() {
      this.updateHistory();      
   }

   render() {
      return (
         <div className="App">
            <CalculatorScreen history={this.state.history} updateHistory={this.updateHistory.bind(this)} />
            <CalculatorPanel panelItems={panelItems} updateHistory={this.updateHistory.bind(this)} />
         </div>
      );
   }

   updateHistory(char) {
      this.setState({ history: char });
   }
}

export default App;
