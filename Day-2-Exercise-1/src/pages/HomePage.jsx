import { useEffect, useState } from "react";
import Todos from "../Todos.jsx";

const HomePage = ({todos, setTodos, title, setTitle, description, setDescription}) => {

  
    // จัดการการเปลี่ยนแปลงของ title
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    // ลบรายการ todo
    const deleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    // เพิ่มรายการ todo
    const addTodo = () => {
      const newTodo = {
        title,
        description,
        completed: false,
      };
  
      setTodos([...todos, newTodo]);
      setTitle("");
      setDescription("")
    };
  
    useEffect(() => {
      console.log(todos);
    }, [todos]);
  
    // เมื่อ Render เสร็จครั้งแรก หรือ มีการเปลี่ยนแปลงของ todos ให้ทำการบันทึกค่า todos ลงใน localStorage
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    return (
      <div className="w-full flex justify-center p-4">
        <div className="w-96 space-y-2">
          <h1 className="text-3xl">Todo App</h1>
          <label>
            Title
            <input
              className="border shadow rounded w-full p-1"
              type="text"
              placeholder="Hit the sack."
              onChange={handleTitleChange}
              value={title}
            />
          </label>
          <label>
            Description
            <textarea
              value={description}
              className="w-full border shadow rounded p-1"
              placeholder="I just want to sleep."
              rows={6}
              onChange={handleDescriptionChange}
            ></textarea>
          </label>
  
          <div className="flex justify-end">
            <button
              onClick={addTodo}
              className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition"
            >
              Add
            </button>
          </div>
  
          <hr />
          <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
        </div>
      </div>
    );
}

export default HomePage