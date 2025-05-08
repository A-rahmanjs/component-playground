import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  Hash,
  RotateCcw,
} from "react-feather";
function Counter({ initialCount = 10 }) {
  const [count, setCount] = React.useState(initialCount);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="wrapper">
      <h1>{count}</h1>
      <form onSubmit={handleSubmit}>
        <button onClick={() => setCount(count + 1)} title="Add 1">
          <ChevronUp />
        </button>
        <button onClick={() => setCount(count + 10)} title="Add 10">
          <ChevronsUp />
        </button>
        <button onClick={() => setCount(initialCount)} title="Reset">
          <RotateCcw />
        </button>
        <button
          onClick={() => setCount(Math.ceil(Math.random() * 100))}
          title="Random Number"
        >
          <Hash />
        </button>
        <button onClick={() => setCount(count - 10)} title="Deduct 10">
          <ChevronsDown />
        </button>
        <button onClick={() => setCount(count - 1)} title="Deduct 1">
          <ChevronDown />
        </button>
      </form>
    </div>
  );
}

export default Counter;
