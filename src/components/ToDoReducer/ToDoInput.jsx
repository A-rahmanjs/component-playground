import React from "react";

function ToDoInput({ handleAddTodo }) {
  const [input, setInput] = React.useState("");
  const id = React.useId();

  return (
    <div className="bg-[hsl(210deg_15%_15%)] rounded">
      <form
        className="p-[16px]"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(input);
          setInput("");
        }}
      >
        <label htmlFor={`${id}-form`}>Add Todos</label>
        <div className="flex flex-wrap gap-[16px]">
          <input
            className="h-10 text-lg flex-[4] min-w-[220px] border-0 border-b-2 border-white rounded-sm bg-transparent outline-offset-4"
            id={`${id}-form`}
            type="text"
            value={input}
            placeholder="Type something... e.g., cook breakfast, take a shower, etc."
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="hover:bg-[hsl(0deg_0%_100%_/_0.2)] h-10 text-lg flex-1 min-w-[50px] bg-[hsl(0deg_0%_100%_/_0.1)] border-none rounded cursor-pointer outline-offset-4"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDoInput;
