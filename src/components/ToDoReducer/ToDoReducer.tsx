import React from "react";
import ToDoInput from "./ToDoInput";
import { X } from "react-feather";
import useLocalStorage from "../../Hooks/useLocalStorage/useLocalStorage";
interface Todo {
  todo: string,
  id: string,
  isCompleted: boolean
}
type Type =
  {type: 'add-todo'; todo: string} |
  {type: 'toggle-complete'; id: string} |
  {type: 'remove-todo'; id:string}


function reducer(todos: Todo[], action: Type): Todo[] {
  switch (action.type) {
    case "add-todo": {
      return [
        ...todos,
        {
          todo: action.todo,
          id: crypto.randomUUID(),
          isCompleted: false,
        },
      ];
    }
    case "toggle-complete": {
      return todos.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    }
    case "remove-todo": {
      return todos.filter((todo) => todo.id !== action.id);
    }
  }
  return todos
}

function ToDoReducer() {
  const { getItem, setItem } = useLocalStorage("todos");
  const [todos, dispatch] = React.useReducer(
    reducer,
    [
      {
        todo: "Example Checked Todo",
        id: crypto.randomUUID(),
        isCompleted: true
      },
      {
        todo: "Example Unchecked Todo",
        id: crypto.randomUUID(),
        isCompleted: false
      }
    ],
    () =>
      getItem() || [
        {
          todo: "Example Checked Todo",
          id: crypto.randomUUID(),
          isCompleted: true
        },
        {
          todo: "Example Unchecked Todo",
          id: crypto.randomUUID(),
          isCompleted: false
        }
      ]
  );

  React.useEffect(() => {
    setItem(todos);
  }, [todos, setItem]);

  function handleAddTodo(input: string) {
    if (input.trim()) dispatch({ type: "add-todo", todo: input });
  }
  function handleToggleTodo(id: string) {
    dispatch({
      type: "toggle-complete",
      id,
    });
  }
  function handleRemoveTodo(id: string) {
    dispatch({ type: "remove-todo", id });
  }

  return (
    <>
      <h1 className="text-4xl text-center text-cyan-600 p-10">To-do List</h1>
      <div className="relative wrapper min-h-[100vh] flex flex-col gap-[32px] text-white">
        <ol className="todo-list flex flex-col gap-2 p-0 list-none">
          {todos.map(({ todo, id, isCompleted }) => (
            <li
              className="flex justify-between border border-[hsl(210,20%,20%)] rounded p-1 bg-[hsl(210deg_15%_15%)]"
              key={id}
            >
              <button
                onClick={() => handleToggleTodo(id)}
                className={`${
                  isCompleted && "completed"
                } w-[100%] text-left p-[16px]`}
              >
                {todo}
              </button>
              <button
                className="grid place-content-center w-14 h-14 bg-transparent text-red-500 border-none rounded-sm cursor-pointer hover:bg-[hsl(210deg 15% 15%)]"
                onClick={() => handleRemoveTodo(id)}
              >
                <X />
              </button>
            </li>
          ))}
        </ol>
        <ToDoInput handleAddTodo={handleAddTodo} />
      </div>
    </>
  );
}

export default ToDoReducer;
