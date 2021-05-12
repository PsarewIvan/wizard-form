import { connect } from 'react-redux';
import Button from '../Button/Button';
import './FinalStep.scss';

const FinalStep = ({
  planName,
  planCost,
  slotsNumber,
  subscriptionTerm,
  discount,
  totalCost,
}) => {
  return (
    <div className="final-step">
      <h2 className="final-step__title">Готово!</h2>
      <p className="final-step__description">
        Подписка на аккаунты успешно оформлена
        <br />
        Начните запрашивать аккаунты из раздела «Подписка»
      </p>
      <ul className="final-step__list">
        <li className="final-step__item">
          <span className="final-step__name">{`План ${planName}`}</span>
          <span className="final-step__added">{`$${Math.round(
            planCost / 100
          )}`}</span>
          <span className="final-step__added-description">{`${slotsNumber} слотов`}</span>
        </li>
        <li className="final-step__item">
          <span className="final-step__name">Срок подписки</span>
          <span className="final-step__added">{`x${subscriptionTerm}`}</span>
          <span className="final-step__added-description">{`${subscriptionTerm} ${
            subscriptionTerm === 1 ? 'месяц' : 'месяца'
          }`}</span>
        </li>
        {!discount ? null : (
          <li className="final-step__item">
            <span className="final-step__name">Скидка</span>
            <span className="final-step__added">{`-${discount}%`}</span>
            <span className="final-step__added-description">На подписку</span>
          </li>
        )}
      </ul>
      <div className="final-step__total">
        <span>Итого:</span>
        <span className="final-step__total-cost">{` $${Math.round(
          totalCost / 100
        )}`}</span>
      </div>
      <div className="final-step__button">
        <Button name="Перейти к запросу" isActive="true" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  planName: state.order.planName,
  planCost: state.order.planCost,
  slotsNumber: state.order.slotsNumber,
  subscriptionTerm: state.order.subscriptionTerm,
  discount: state.order.discount,
  totalCost: state.order.totalCost,
});

export default connect(mapStateToProps)(FinalStep);
