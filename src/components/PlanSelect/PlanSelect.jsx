import PlanCard from './../PlanCard/PlanCard';
import './PlanSelect.scss';

const PlanSelect = ({ plans, changePlan }) => {
  const plansElement = plans.map((item) => (
    <PlanCard key={item.id} changePlan={changePlan} {...item} />
  ));
  return (
    <div className="plan-select">
      <h2 className="plan-select__title">План подписки</h2>
      <div className="plan-select__cards">{plansElement}</div>
    </div>
  );
};

export default PlanSelect;
