import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Colorpicker from "./components/ColorPicker/ColorPicker";
import Greeting from "./components/Greeting/Greeting";
import Footer from "./components/Footer/Footer";
import Clock from "./components/Clock/Clock";
import useToggle from "./Hooks/useToggle/useToggle";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [name, setName] = useState("Visitor");
  const [input, setInput] = useState("");
  const id = React.useId();
  const [show, setShow] = useToggle(true);

  function handleSubmit(event) {
    event.preventDefault();
    setName(input);
    setInput("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-0.5 w-full border-b-1 border-black border-1 p-2"
      >
        <label htmlFor={id}>Name: </label>
        <input
          id={id}
          className="bg-white rounded-2xl mr-1 text-black p-[0.2rem] border-2 border-solid border-blue-600"
          placeholder="Enter name"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className=" p-[0.2rem] border" type="submit">
          Submit
        </button>
      </form>
      <Greeting name={name} />
      <Counter initialCount={10} />
      <Colorpicker />
      <Button onClick={() => setShow(false)} title="Toggle On/Off">
        Toggle Clock
      </Button>
      {show && <Clock />}
      <Footer />
    </>
  );
}

export default App;
