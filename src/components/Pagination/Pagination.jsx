import './Pagination.scss';

const Pagination = ({ currentStep, name }) => {
  return (
    <div className="pagination">
      <div className="pagination__count">{`Шаг ${currentStep}/3`}</div>
      <div className="pagination__name">{name[currentStep - 1]}</div>
      <div
        className={`pagination__line pagination__line--${currentStep}`}
      ></div>
    </div>
  );
};

export default Pagination;
