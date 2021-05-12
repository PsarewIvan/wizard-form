import { data, subscriptions } from './mock-data';

const initialState = {
  data,
  subscriptions,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { dataReducer };
