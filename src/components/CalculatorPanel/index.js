import React, { Component } from 'react';
import './panel.css';
import './bottom-panel.css';

class CalculatorPanel extends Component {
   constructor(props) {
      super(props);

      this.state = { panelItems: props.panelItems };
   }

   render() {
      // Get first 10 panel elements
      const panelTopEls = this.props.panelItems.filter((item, i) => i <= 10).map(item => <PanelItem key={item} value={item} updateScreen={this.props.updateScreen} />);

      // Get all the rest elements
      const panelBottomEls = this.props.panelItems.filter((item, i) => i > 10).map(item => <PanelItem key={item} value={item} updateScreen={this.props.updateScreen} />);

      return (
         <section className="Panel">

            <button className="btn-active" onClick={this.props.updateScreen.bind(this, 'C')}>
               <span>C</span>
            </button>
            
            {panelTopEls}

            <div className="Panel-bottom">
               <div className="Panel-bottom-buttons">
                  {panelBottomEls}
               </div>

               <div className="Panel-bottom-active" onClick={this.props.updateScreen.bind(this, '=')}>
                  <button className="btn-active"><span>=</span></button>
               </div>
            </div>

         </section>
      );
   }
}

const PanelItem = props => <button className="btn-default" onClick={props.updateScreen.bind(this, props.value)}><span>{props.value}</span></button>;

export default CalculatorPanel;