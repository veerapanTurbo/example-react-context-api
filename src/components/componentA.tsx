import { Component } from "react";
import { CounterContext } from "../context/counter";
import CounterHandle from "./counterHandle";

interface IProps {}
class ComponentA extends Component<IProps> {
  context!: React.ContextType<typeof CounterContext>;
  render() {
    return (
      <div className="component">
        <b>A = {this.context?.count.countA}</b>
        <CounterHandle
          onAdd={() => this.context?.setCount?.("countA", "ADD")}
          onIncrement={() => this.context?.setCount?.("countA", "INCREMENT")}
        />
      </div>
    );
  }
}

ComponentA.contextType = CounterContext;
export default ComponentA;
