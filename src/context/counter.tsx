import React, { Component } from "react";

export interface CountState {
  countA: number;
  countB: number;
  countC: number;
  countD: number;
}

/* กำหนด state เริ่มต้น (optional) */ 
const initialCountState: CountState = {
  countA: 0,
  countB: 0,
  countC: 0,
  countD: 0,
};


/* interface หลักของ context */ 
/* เพื่อ component ที่นำ context นี้ไปใช้งาน สามารถรู้ได้ว่า context นี้มี state อะไร หรือทำอะไรได้ */ 
interface ICounterContext {
  count: CountState; // <--- state
  setCount?: (key: keyof CountState, type: "ADD" | "INCREMENT") => void; // <--- function handle set count state (optional)
}

// create context
export const CounterContext = React.createContext<ICounterContext>({
  // กำหนด state เริ่มต้น
  count: initialCountState,
});

interface IProps extends React.PropsWithChildren {}

class CounterContextProvider extends Component<IProps, CountState> {
  constructor(props: IProps) {
    super(props);
    this.state = initialCountState;
    this.setCount = this.setCount.bind(this);
  }

  private setCount(key: keyof CountState, type: "ADD" | "INCREMENT") {
    this.setState((prevState) => {
      prevState = {
        ...prevState,
        [key]: type === "ADD" ? prevState[key] + 1 : prevState[key] - 1,
      };
      return prevState;
    });
  }

  render() {
    return (
      <CounterContext.Provider
        // inject current state หรือ function ให้กับ children
        value={{
          count: this.state,
          setCount: this.setCount,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterContextProvider;
