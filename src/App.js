import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <>
      <div>
        <input
          type="range"
          mix={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <input
          type="text"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => Number(c - step))}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => Number(c + step))}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is  `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </>
  );
}
export default App;
