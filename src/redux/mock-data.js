// Some data for the application

const data = [
  {
    id: 1,
    name: `«Стандарт»`,
    countries: 59,
    itemCost: 7900,
    cost: 9900,
    minItems: 20,
  },
  {
    id: 2,
    name: `«Стандарт+»`,
    countries: 74,
    itemCost: 9900,
    cost: 16500,
    minItems: 15,
  },
  {
    id: 3,
    name: `«Премиум»`,
    countries: 90,
    itemCost: 11900,
    cost: 37900,
    minItems: 10,
  },
];

const balance = 400000;

const subscriptions = [
  { id: 1, value: 1, discount: 0 },
  { id: 2, value: 2, discount: 10 },
  { id: 3, value: 3, discount: 20 },
  { id: 4, value: 4, discount: 30 },
];

export { data, balance, subscriptions };
