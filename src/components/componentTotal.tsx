import React, { Component } from "react";
import { CounterContext } from "../context/counter";

class ComponentTotal extends Component {
  render() {
    return (
      <div className="component">
        <b>Total</b>
        <CounterContext.Consumer>
          {({ count: { countA, countB, countC, countD } }) => (
            <b>{countA + countB + countC + countD}</b>
          )}
        </CounterContext.Consumer>
      </div>
    );
  }
}
export default ComponentTotal;
