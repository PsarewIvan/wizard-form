import { connect } from 'react-redux';
import './Steps.scss';

function Steps({ steps, currentStep }) {
  const step = steps[currentStep - 1];

  return (
    <div className="steps">
      <span>{`Шаг ${currentStep}/3`}</span>
      <span>{step.name}</span>
      <div></div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  steps: state.steps.steps,
  currentStep: state.steps.currentStep,
});

export default connect(mapStateToProps)(Steps);
