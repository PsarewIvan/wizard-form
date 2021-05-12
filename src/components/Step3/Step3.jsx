import './Step3.scss';

const Step3 = ({ currentStep }) => {
  if (currentStep !== 3) {
    return null;
  }

  return (
    <div className="step3">
      <h2 className="step3__title">Пополнение</h2>
      <div className="step3__cash">
        <label className="step3__input-title step3__input-title--cash">
          Введите сумму
          <input className="step3__input" type="number" />
        </label>
      </div>
      <div className="step3__payment">
        <p className="step3__input-title step3__input-title--payment">
          Способ пополнения
        </p>
        <div className="step3__radio-wrapper">
          <label className="step3__label">
            Кредитной картой
            <input
              className="step3__radio"
              type="radio"
              name="payment"
              value="card"
            />
          </label>
          <label className="step3__label">
            Webmoney
            <input
              className="step3__radio"
              type="radio"
              name="payment"
              value="webmoney"
            />
          </label>
          <label className="step3__label">
            Яндекс.Деньги
            <input
              className="step3__radio"
              type="radio"
              name="payment"
              value="yandex"
            />
          </label>
          <label className="step3__label">
            Bitcoin
            <input
              className="step3__radio"
              type="radio"
              name="payment"
              value="bitcoin"
            />
          </label>
          <label className="step3__label">
            QIWI кошелек
            <input
              className="step3__radio"
              type="radio"
              name="payment"
              value=""
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3;
