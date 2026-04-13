import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaToppings from "./PizzaToppings";
import ThamiltonComponent from "./ThamiltonComponent";

const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <PizzaToppings />
      <ThamiltonComponent />
    </div>
  );
};

export default App;
