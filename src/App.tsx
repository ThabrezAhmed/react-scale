import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "../src/redux/counter/reducer";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const countResult = useSelector((state) => state?.value);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    dispatch(incremented());
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleIncrement}>count is {countResult}</button>
      </div>
    </div>
  );
}

export default App;
