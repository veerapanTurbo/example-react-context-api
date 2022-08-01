import "./App.css";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import ComponentC from "./components/componentC";
import ComponentD from "./components/componentD";
import ComponentTotal from "./components/componentTotal";
import CounterContextProvider from "./context/counter";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
        <ComponentTotal />
      </CounterContextProvider>
    </div>
  );
}

export default App;
