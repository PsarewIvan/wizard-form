import React, { useState } from 'react';
import './SlotsSelect.scss';

const SlotsSelect = ({ slotsNumber, minSlotsNumber, changeSlots }) => {
  const [isError, setError] = useState(false);

  const handleInputChange = (evt) => {
    changeSlots(evt.target.value);
  };

  const handleInputBlur = (evt) => {
    setError(slotsNumber < minSlotsNumber);
  };

  const handleButtonPlusClick = () => {
    const newSlots = Number(slotsNumber) + 1;
    changeSlots(newSlots);
  };

  const handleButtonMinusClick = () => {
    const newSlots = Number(slotsNumber) - 1;
    changeSlots(newSlots);
  };

  return (
    <div className="slots-select">
      <h3 className="slots-select__title">Количество слотов</h3>
      <div className="slots-select__input-wrapper">
        <input
          className="slots-select__input"
          type="number"
          value={slotsNumber || ''}
          min="0"
          disabled={slotsNumber === null}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <button
          className="slots-select__button slots-select__button--plus"
          onClick={handleButtonPlusClick}
          disabled={slotsNumber === null}
          type="button"
        >
          +
        </button>
        <button
          className="slots-select__button slots-select__button--minus"
          onClick={handleButtonMinusClick}
          disabled={slotsNumber === null || slotsNumber === minSlotsNumber}
          type="button"
        >
          -
        </button>
        {isError && (
          <span className="slots-select__error">
            {`Для оформления выбранного плана необходимо более ${minSlotsNumber} слотов`}
          </span>
        )}
      </div>
    </div>
  );
};

export default SlotsSelect;
