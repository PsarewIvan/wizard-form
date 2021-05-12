import PlanSelect from './../PlanSelect/PlanSelect';
import SlotsSelect from './../SlotsSelect/SlotsSelect';
import './Step1.scss';

const Step1 = ({
  currentStep,
  plans,
  changePlan,
  changeSlots,
  slotsNumber,
  minSlotsNumber,
}) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <div className="step1">
      <div className="step1__plan">
        <PlanSelect plans={plans} changePlan={changePlan} />
      </div>
      <div className="step1__slots">
        <SlotsSelect
          changeSlots={changeSlots}
          slotsNumber={slotsNumber}
          minSlotsNumber={minSlotsNumber}
        />
      </div>
    </div>
  );
};

export default Step1;
