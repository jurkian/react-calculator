import React, { Component } from 'react';
import './panel.css';
import './bottom-panel.css';

class CalculatorPanel extends Component {
   constructor(props) {
      super();

      this.state = { panelItems: props.panelItems };
   }

   render() {
      // Get first 10 panel elements
      const panelTopEls = this.state.panelItems.filter((el, i) => i <= 10).map(el => <PanelItem key={el} value={el} />);

      // Get all the rest elements
      const panelBottomEls = this.state.panelItems.filter((el, i) => i > 10).map(el => <PanelItem key={el} value={el} />);

      return (
         <section className="Panel">

            <button className="btn-active"><span>C</span></button>
            {panelTopEls}

            <div className="Panel-bottom">
               <div className="Panel-bottom-buttons">
                  {panelBottomEls}
               </div>

               <div className="Panel-bottom-active">
                  <button className="btn-active"><span>=</span></button>
               </div>
            </div>

         </section>
      );
   }
}

const PanelItem = (props) => <button className="btn-default"><span>{props.value}</span></button>;

export default CalculatorPanel;