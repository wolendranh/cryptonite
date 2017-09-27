import { combineReducers } from 'redux'
import * as ACTION_TYPES from '../actions/currencyAction'

interface Action {
  type: string;
  payload: string;
}

var currency = [{'name': 'BTC', 'value': 1}, {'name': 'ETH', 'value': 1}, {'name': 'Test', 'value': 4}];

const initialState = {
  currencies: currency
};

const updateCurrency = (state = initialState, action: Action): {} => {
  switch(action.type) {
    case 'press button': {
      return action.payload
    }
    default: {
      console.log(action.type, action.payload)
    }
  }
  return state;
};

const rootReducer = combineReducers({
  currencies: updateCurrency
});

export default rootReducer
