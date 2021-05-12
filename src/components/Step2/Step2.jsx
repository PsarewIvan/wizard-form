import TermSelect from '../TermSelect/TermSelect';
import './Step2.scss';

const Step2 = ({
  currentStep,
  changeTerm,
  subscriptions,
  totalCostForSelect,
}) => {
  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className="step2">
      <TermSelect
        changeTerm={changeTerm}
        subscriptions={subscriptions}
        totalCostForSelect={totalCostForSelect}
      />
    </div>
  );
};

export default Step2;
