import React, { Component } from "react";
import { CounterContext } from "../context/counter";
import CounterHandle from "./counterHandle";

class ComponentB extends Component {
  context!: React.ContextType<typeof CounterContext>;

  render() {
    return (
      <div className="component">
        <b>B = {this.context?.count.countB}</b>
        <CounterHandle
          onAdd={() => this.context?.setCount?.("countB", "ADD")}
          onIncrement={() => this.context?.setCount?.("countB", "INCREMENT")}
        />
      </div>
    );
  }
}

ComponentB.contextType = CounterContext;
export default ComponentB;
