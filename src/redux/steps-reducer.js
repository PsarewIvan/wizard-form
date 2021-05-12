const NEXT_STEP = 'NEXT_STEP';
const PREVIOUS_STEP = 'NEXT_STEP';

const initialState = {
  currentStep: 1,
  steps: [
    { id: 1, name: 'План подписки' },
    { id: 2, name: 'Срок подписки' },
    { id: 3, name: 'Оплата' },
  ],
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep++,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep--,
      };

    default:
      return state;
  }
};

const nextStep = () => ({
  type: NEXT_STEP,
});

const previousStep = () => ({
  type: NEXT_STEP,
});

export { stepsReducer, nextStep, previousStep };
