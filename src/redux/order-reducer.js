import { data, balance, subscriptions } from './mock-data';

const CHANGE_PLAN = 'CHANGE_PLAN';
const CHANGE_TERM = 'ADD_TERM';
const CHANGE_SLOTS = 'CHANGE_SLOTS';

const calcPlanCost = (perMonth, slots, slotCost) => {
  return slots * slotCost + perMonth;
};

const calcTotalCost = (planCost, term = 1, ratio = 1) => {
  return planCost * term * ratio;
};

const calcDiscountRatio = (discount) => {
  return (100 - discount) / 100;
};

const calcTotalCostForSelect = (planCost) => {
  return subscriptions.map((item) => {
    return planCost * item.value * calcDiscountRatio(item.discount);
  });
};

const initialState = {
  balance: balance,
  id: null,
  planName: null,
  slotsNumber: null,
  minSlotsNumber: null,
  planCost: null,
  totalCost: null,
  discount: 0,
  subscriptionTerm: 1,
  costPerMonth: null,
  minSlots: null,
  slotCost: null,
  isTermSelected: false,
  totalCostForSelect: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAN:
      const currentPlan = data[action.id - 1];
      const planCost = calcPlanCost(
        currentPlan.cost,
        currentPlan.minItems,
        currentPlan.itemCost
      );
      const discountRatio = calcDiscountRatio(state.discount);
      const totalCost = calcTotalCost(
        planCost,
        state.subscriptionTerm,
        discountRatio
      );
      return {
        ...state,
        id: currentPlan.id,
        planName: currentPlan.name,
        slotsNumber: currentPlan.minItems,
        minSlotsNumber: currentPlan.minItems,
        slotCost: currentPlan.itemCost,
        costPerMonth: currentPlan.cost,
        planCost: planCost,
        totalCost: totalCost,
        totalCostForSelect: calcTotalCostForSelect(planCost),
      };

    case CHANGE_SLOTS:
      const planCostWithSlots = calcPlanCost(
        state.costPerMonth,
        action.count,
        state.slotCost
      );
      const discountRatioWithSlots = calcDiscountRatio(state.discount);
      return {
        ...state,
        slotsNumber: action.count,
        planCost: planCostWithSlots,
        totalCost: calcTotalCost(
          planCostWithSlots,
          state.subscriptionTerm,
          discountRatioWithSlots
        ),
        totalCostForSelect: calcTotalCostForSelect(planCostWithSlots),
      };

    case CHANGE_TERM:
      const discount = subscriptions[action.count - 1].discount;
      const discountRatioWithTerm = calcDiscountRatio(discount);
      return {
        ...state,
        subscriptionTerm: action.count,
        discount: discount,
        totalCost: calcTotalCost(
          state.planCost,
          action.count,
          discountRatioWithTerm
        ),
        isTermSelected: true,
      };

    default:
      return state;
  }
};

const changePlan = (id) => ({
  type: CHANGE_PLAN,
  id,
});

const changeSlots = (count) => ({
  type: CHANGE_SLOTS,
  count,
});

const changeTerm = (count) => ({
  type: CHANGE_TERM,
  count,
});

export { orderReducer, changePlan, changeTerm, changeSlots };
