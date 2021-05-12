import './PlanCard.scss';

const PlanCard = ({
  name,
  minItems,
  countries,
  itemCost,
  cost,
  id,
  changePlan,
}) => {
  const handleInputChange = (evt) => {
    changePlan(evt.target.value);
  };

  return (
    <label className="plan-card">
      <input
        className="plan-card__input"
        type="radio"
        name="plan"
        value={id}
        onChange={handleInputChange}
      />
      <span className="plan-card__wrapper">
        <span className="plan-card__title">{name}</span>
        <span className="plan-card__description-wrapper">
          <span className="plan-card__description">{`от ${minItems} слотов,`}</span>
          <span className="plan-card__description">{`${countries} стран ГЕО,`}</span>
          <span className="plan-card__description">{`$${Math.round(
            itemCost / 100
          )} за слот`}</span>
        </span>
        <span className="plan-card__coast">
          {`$${Math.round(cost / 100)} `}
          <span className="plan-card__coast-text">/ месяц</span>
        </span>
        <a className="plan-card__link" href="/mock-link">
          Подробнее
        </a>
      </span>
    </label>
  );
};

export default PlanCard;
