import { connect } from 'react-redux';
import OrderItem from './../OrderItem/OrderItem';
import Button from './../Button/Button';
import './Order.scss';

const Order = ({
  planName,
  planCost,
  slotsNumber,
  subscriptionTerm,
  discount,
  totalCost,
  balance,
  isTermSelected,
  changeStep,
}) => {
  let termElement, discountElement;
  const description = slotsNumber ? `${slotsNumber} слотов` : null;
  const currentPlanName = planName || 'не выбран';

  const planElement = (
    <OrderItem
      name={`План ${currentPlanName}`}
      added={`$${Math.round(planCost / 100)}`}
      description={description}
    />
  );

  if (isTermSelected) {
    const termDescription = subscriptionTerm === 1 ? 'месяц' : 'месяца';
    termElement = (
      <OrderItem
        name="Срок подписки"
        added={`x${subscriptionTerm}`}
        description={`${subscriptionTerm} ${termDescription}`}
      />
    );
  }

  if (discount) {
    discountElement = (
      <OrderItem
        name={'Скидка'}
        added={`-${discount}%`}
        description={`на подписку`}
        mod={'discount'}
      />
    );
  }

  const handleButtonClick = () => {
    if (balance >= totalCost) {
      changeStep(4);
    }
  };

  return (
    <div className="order">
      <h2 className="order__title">Ваш запрос</h2>
      <div className="order__items-wrapper">
        <div className="order__plan">{planElement}</div>
        <div className="order__term">{termElement}</div>
        <div className="order__discount">{discountElement}</div>
      </div>

      <div className="order__total-wrapper">
        Итого:
        <span className="order__total">{`$${Math.round(
          totalCost / 100
        )}`}</span>
      </div>

      <div className="order__bottom-wrapper">
        <div className="order__balance-wrapper">
          <span className="order__balance-description">{`Ваш баланс: `}</span>
          <span className="order__balance">{`$${Math.round(
            balance / 100
          )}.00`}</span>
        </div>
        <div className="order__button">
          <Button
            name={'Запросить'}
            isActive={totalCost && balance >= totalCost}
            onClick={handleButtonClick}
          />
        </div>
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
  balance: state.order.balance,
  isTermSelected: state.order.isTermSelected,
});

export default connect(mapStateToProps)(Order);
