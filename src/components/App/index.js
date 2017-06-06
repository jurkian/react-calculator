import React, { Component } from 'react';
import './app.css';

import CalculatorScreen from '../CalculatorScreen/index';
import CalculatorPanel from '../CalculatorPanel/index';

const panelItems = '%/X789-456+1230.'.split('');

class App extends Component {
   render() {
      return (
         <div className="App">
            <CalculatorScreen />
            <CalculatorPanel panelItems={panelItems} />
         </div>
      );
   }
}

export default App;
