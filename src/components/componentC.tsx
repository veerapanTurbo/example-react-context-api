import React, { Component } from "react";
import { CounterContext } from "../context/counter";
import CounterHandle from "./counterHandle";

class ComponentC extends Component {
  context!: React.ContextType<typeof CounterContext>;
  render() {
    return (
      <div className="component">
        <b>C = {this.context?.count.countC}</b>
        <CounterHandle
          onAdd={() => this.context?.setCount?.("countC", "ADD")}
          onIncrement={() => this.context?.setCount?.("countC", "INCREMENT")}
        />
      </div>
    );
  }
}

ComponentC.contextType = CounterContext;
export default ComponentC;
