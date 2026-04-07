import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaToppings from './PizzaToppings';
import ZsmuckerbryanComponent from './ZsmuckerbryanComponent';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <ZsmuckerbryanComponent>

      </ZsmuckerbryanComponent>
    </div>
  );
}

export default App
