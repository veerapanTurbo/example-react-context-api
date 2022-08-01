import React, { Component } from "react";
import { CounterContext } from "../context/counter";
import CounterHandle from "./counterHandle";

class ComponentD extends Component {
  context!: React.ContextType<typeof CounterContext>;
  render() {
    return (
      <div className="component">
        <b>D = {this.context?.count.countD}</b>
        <CounterHandle
          onAdd={() => this.context?.setCount?.("countD", "ADD")}
          onIncrement={() => this.context?.setCount?.("countD", "INCREMENT")}
        />
      </div>
    );
  }
}

ComponentD.contextType = CounterContext;
export default ComponentD;
