import { useState } from 'react';
import Header from './components/Header/Header';
import MasterForm from './components/MasterForm/MasterForm';
import Order from './components/Order/Order';
import Step4 from './components/Step4/Step4';
import './App.scss';

function App() {
  const [currentStep, setStep] = useState(1);

  const changeStep = (value) => {
    setStep(value);
  };
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      {currentStep < 4 ? (
        <>
          <div className="app__content">
            <MasterForm currentStep={currentStep} changeStep={changeStep} />
          </div>
          <div className="app__order">
            <Order changeStep={changeStep} />
          </div>
        </>
      ) : null}
      {currentStep === 4 ? (
        <div className="app__finish">
          <Step4 />{' '}
        </div>
      ) : null}
    </div>
  );
}

export default App;
