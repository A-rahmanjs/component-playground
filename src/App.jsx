import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Colorpicker from "./components/ColorPicker/ColorPicker";
import Greeting from "./components/Greeting/Greeting";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [name, setName] = useState("Visitor");
  const [input, setInput] = useState("");
  const id = React.useId();

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
        <button className="rounded-2xl p-[0.2rem]" type="submit">
          Submit
        </button>
      </form>
      <Greeting name={name} />
      <Counter initialCount={10} />
      <Colorpicker />
      <Footer />
    </>
  );
}

export default App;
