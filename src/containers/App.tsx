
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

import Table from "../components/Table";


var currency = [{'name': 'BTC', 'value': 1}, {'name': 'ETH', 'value': 1}, {'name': 'Test', 'value': 4}];

const initialState = {
  currencies: currency
};

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 , hostname: 'localhost', name: 'test test'});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers()
)



ReactDOM.render(
  // <Hello name="Willson" />,
    <Provider store={store}>
        <Table heading="Curencyes" doSome={() => null}/>
    </Provider>,
  document.getElementById("root")
);

export default store;
