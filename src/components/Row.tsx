import * as React from "react";

interface Currency
{
    name: string,
    value: number
}

interface RowProps {
  currency: Currency;
}

class Row extends React.Component<RowProps, {}> {
  render() {
    return <tr><td>{this.props.currency.name}</td><td>{this.props.currency.value}</td></tr>;
  }
}

export default Row;
