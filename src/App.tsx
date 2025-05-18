import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Greeting from "./components/Greeting/Greeting";
import Footer from "./components/Footer/Footer";
import Clock from "./components/Clock/Clock";
import useToggle from "./Hooks/useToggle/useToggle";
import Button from "./components/Button/Button";
import JokeFetcher from "./components/JokeFetcher/JokeFetcher";
import useLocalStorage from "./Hooks/useLocalStorage/useLocalStorage";
import ToDoReducer from "./components/ToDoReducer/ToDoReducer";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("Visitor");
  const [input, setInput] = useState<string>("");
  const [showClock, setShowClock] = useToggle(false);
  const { setItem, getItem } = useLocalStorage("value");
  const id = React.useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    setName(input);
    setInput("");
    setItem(input);
  }
  React.useEffect(() => {
    setName(getItem());
  }, [getItem, input]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center gap-3 w-full max-w-3xl mx-auto py-5 px-6 mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl shadow-md border border-blue-200 dark:border-blue-800"
      >
        <label htmlFor={id} className="text-gray-800 font-medium text-lg">Name: </label>
        <input
          id={id}
          className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10  rounded-lg px-4 py-2 text-gray-800  border-2 border-blue-500 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 shadow-sm"
          placeholder="Enter your name"
          type="text"
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
        <Button type="submit">
          Submit
        </Button>
      </form>
      <Greeting name={name} />
      <Counter initialCount={10} />
      <ColorPicker />
      <div className="mt-10 flex justify-center items-center flex-col">
        <Button
          onClick={setShowClock}
          title="Toggle On/Off"
        >
          Toggle Clock
        </Button>
        {showClock && <Clock />}
      </div>
      <JokeFetcher />
      <ToDoReducer />
      <Footer />
    </>
  );
}

export default App;
