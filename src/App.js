import logo from "./logo.svg";
import "./App.css";
import Square from "./square";


function App() {
  const propVariable = "This is a Prop";
  return (
    <div className="App">
      <Square propVar={propVariable} />
    </div>
  );
}

export default App;
