import Select from 'react-select';
import './TermSelect.scss';

function TermSelect({ changeTerm, subscriptions, totalCostForSelect }) {
  const options = subscriptions.map((item, i) => ({
    value: item.value,
    label: `${item.value} ${
      item.value === 1 ? 'месяц' : 'месяца'
    } - ${Math.round(totalCostForSelect[i] / 100)}$`,
  }));
  const handleChange = (selectedOption) => {
    changeTerm(selectedOption.value);
  };

  return (
    <div className="term-select">
      <h2 className="term-select__title">Срок подписки</h2>
      <Select options={options} onChange={handleChange} />
    </div>
  );
}

export default TermSelect;
