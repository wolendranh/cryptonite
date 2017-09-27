import * as React from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as io from 'socket.io-client'
;
import * as actions from "../actions/currencyAction"

import Row from "./Row";

export interface Currency
{
    name: string,
    value: number
}

interface TableProps {
  heading: string;
  doSome: () => void;
  currencies?: Currency[]
}


class Table extends React.Component<TableProps, void> {

  render() {
    const {heading, currencies, doSome} = this.props;
    console.log(this.props);
    const handleIncrement = () => {
      doSome();
    };

    return (
    <table>
    <tbody>
      <tr>
        <th>Currency</th>
        <th>Price</th>
        <button onClick={handleIncrement}></button>
      </tr>
      {
        currencies.map(i => <Row currency={i}/> )
      }
      </tbody>
      </table>
  );
  }
}

function getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


interface State {
  currencies: Currency[],
}

const mapStateToProps = (state:State) => ({
  currencies: state.currencies
});

const mapDispatchToProps = (dispatch: Function) => ({
  doSome: () => {
    var currency = [
      {'name': 'BTC', 'value': getRandomInt(1500, 3000)},
      {'name': 'ETH', 'value': getRandomInt(100, 300)},
      {'name': 'Test', 'value': getRandomInt(1, 10)}
    ];
    dispatch(actions.addTodo(currency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
