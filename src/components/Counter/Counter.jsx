import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  Hash,
  RotateCcw,
} from "react-feather";
import Button from "../Button/Button";

function Counter({ initialCount = 10 }) {
  const [count, setCount] = React.useState(initialCount);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="wrapper flex justify-center items-center flex-col text-center">
      <h1 className="text-3xl text-center text-cyan-600">Counter</h1>

      <h1 className="text-5xl mb-10">{count}</h1>
      <form onSubmit={handleSubmit}>
        <Button onClick={() => setCount(count + 1)} title="Add 1">
          <ChevronUp className="w-10 h-10" />
        </Button>
        <Button onClick={() => setCount(count + 10)} title="Add 10">
          <ChevronsUp className="w-10 h-10" />
        </Button>
        <Button onClick={() => setCount(initialCount)} title="Reset">
          <RotateCcw className="w-10 h-10" />
        </Button>
        <Button
          onClick={() => setCount(Math.ceil(Math.random() * 100))}
          title="Random"
        >
          <Hash className="w-10 h-10" />
        </Button>
        <Button onClick={() => setCount(count - 10)} title="Deduct 10">
          <ChevronsDown className="w-10 h-10" />
        </Button>
        <Button onClick={() => setCount(count - 1)} title="Deduct 1">
          <ChevronDown className="w-10 h-10" />
        </Button>
      </form>
    </div>
  );
}

export default Counter;
