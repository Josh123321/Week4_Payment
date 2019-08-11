import React from 'react';
import '../style/css/App.css';
import WebHeader from '../component/WebHeader';
import StepFlow from '../component/StepFlow';
import Order from '../component/Order';
import MainContent from '../component/MainContent';

function App() {
  return (
    <div className="todo" style={{overflow:'hidden'}}>
      <WebHeader />
      <StepFlow currentStep={2} />
      <Order amount={500} shippingFee={60} total={560} />
      <MainContent currentStep={2} />
    </div>
  );
}

export default App;
