import { connect } from 'react-redux';
import Button from './../Button/Button';
import './Step4.scss';

const Step4 = ({
  planName,
  planCost,
  slotsNumber,
  subscriptionTerm,
  discount,
  totalCost,
}) => {
  return (
    <div className="step4">
      <h2 className="step4__title">Готово!</h2>
      <p className="step4__description">
        Подписка на аккаунты успешно оформлена
        <br />
        Начните запрашивать аккаунты из раздела «Подписка»
      </p>
      <ul className="step4__list">
        <li className="step4__item">
          <span className="step4__name">{`План ${planName}`}</span>
          <span className="step4__added">{`$${Math.round(
            planCost / 100
          )}`}</span>
          <span className="step4__added-description">{`${slotsNumber} слотов`}</span>
        </li>
        <li className="step4__item">
          <span className="step4__name">Срок подписки</span>
          <span className="step4__added">{`x${subscriptionTerm}`}</span>
          <span className="step4__added-description">{`${subscriptionTerm} ${
            subscriptionTerm === 1 ? 'месяц' : 'месяца'
          }`}</span>
        </li>
        {!discount ? null : (
          <li className="step4__item">
            <span className="step4__name">Скидка</span>
            <span className="step4__added">{`-${discount}%`}</span>
            <span className="step4__added-description">На подписку</span>
          </li>
        )}
      </ul>
      <div className="step4__total">
        <span>Итого:</span>
        <span className="step4__total-cost">{` $${Math.round(
          totalCost / 100
        )}`}</span>
      </div>
      <div className="step4__button">
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

export default connect(mapStateToProps)(Step4);
