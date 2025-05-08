import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Colorpicker from "./components/ColorPicker/ColorPicker";
import Greeting from "./components/Greeting/Greeting";
import "./App.css";

function App() {
  const [name, setName] = useState("Visitor");
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName(input);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <Greeting name={name} />
      <Counter initialCount={10} />
      <Colorpicker />
    </>
  );
}

export default App;
