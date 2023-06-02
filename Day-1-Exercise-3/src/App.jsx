import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const checkTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].completed = e.target.checked;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = {
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTitle("");
  };

  useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1 className="text-3xl font-bold mb-3">Todo App</h1>
        <div className="ml-2">
          <label className="text-xl font-semibold">
            Title
            <input
              className="ml-2 border-solid border-2 border-gray-200 rounded-lg p-0.5 pl-1.5 text-base"
              type="text"
              placeholder="Hit the sack."
              onChange={handleTitleChange}
              value={title}
            />
          </label>
          <div className="inline-block">
            <button onClick={addTodo} className="bg-teal-500 text-white text-sm font-semibold py-1.5 px-2 rounded-lg ml-1">
              Add
            </button>
          </div>

          <hr className="mt-3 mb-1"/>

          <Todos
            todos={todos}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          ></Todos>
        </div>
      </div>
    </div>
  );
}

export default App;
