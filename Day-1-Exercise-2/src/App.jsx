import { useEffect } from "react";
import { useState } from "react";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const parsed = JSON.parse(localStorage.getItem('toDos'))
  if (parsed.length > 0 && todos.length == 0){
    setTodos(parsed)
  }

  useEffect(()=>{
    console.log(todos)
    localStorage.setItem("toDos", JSON.stringify(todos))
  }, 
  [todos])
  




  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const checkTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].completed = e.target.checked;
    setTodos(newTodos);
  };

  const changeTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].title = e.target.value;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // ฟังก์ชันเพิ่มราบการ todo ใหม่ ✨
  const addTodo = () => {
    // Object ที่จะทำการเพิ่มเข้าไปใน todos
    const newTodo = {
      title,
      completed: false,
    };

    // ทำการ Array destructuring แล้วก็เพิ่ม newTodo เข้าไปใน Array ก่อนนั้นด้วย
    setTodos([...todos, newTodo]);
    // เมื่อทำการเพิ่ม todo รายการใหม่เสร็จแล้ว เราทำการล้างค่าในช่อง input ได้โดยการ setTitle เป็น ""
    setTitle("");
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Todo App</h1>
        <label>
          Title
          <input
            className="textField"
            type="text"
            placeholder="Hit the sack."
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <div className="toolbar">
          <button onClick={addTodo} className="button button-add">
            Add
          </button>
        </div>

        <hr />

        {/* เมื่อไม่มีรายการ todos จะให้ทำการแสดงว่าไม่มีรายการ */}
        {todos.length === 0 && <div className="noTodo">No todos found</div>}

        <div className="todos">
          <Todos todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} changeTodo={changeTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
