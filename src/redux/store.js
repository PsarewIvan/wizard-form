import { createStore, combineReducers } from 'redux';
import { dataReducer } from './data-reducer';
import { orderReducer } from './order-reducer';

const reducers = combineReducers({
  data: dataReducer,
  order: orderReducer,
});

const store = createStore(reducers);

export default store;
