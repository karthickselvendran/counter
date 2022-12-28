import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("count :: ", count)

  return (
    <div>
      <Header title="Counter Application" />
      <div className="container">
        <p>
          Welcome to our platform.  In this website we have a feature for incrementing, decrementing and resetting the number.
        </p>
        <span className="count">{count}</span>
        <div className="buttonGroup">
          <Button className="bgColorPositive" name="Increment" onClick={() => setCount(count => count + 1)} />
          <Button className="bgColorNeutral" name="Reset" onClick={() => setCount(0)} />
          <Button className="bgColorNegative" name="Decrement" onClick={() => setCount(count => count - 1)} />
        </div>
      </div>
    </div>
  );
}

export default App;
