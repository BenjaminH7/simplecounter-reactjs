import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.App}>
      {counter}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Set to Zero
      </button>
    </div>
  );
}

export default App;
