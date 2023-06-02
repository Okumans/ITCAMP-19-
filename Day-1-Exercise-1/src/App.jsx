import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  // function สำหรับเพิ่ม todo เมื่อปุ่ม Add ถูกกด

  const whenChange = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const addTodo = () => {
    console.log(todos);
    const element = {
      title: title,
      completed: false
    }
    setTodos([...todos, element])
  };

  const CreateBoxs = ({elements}) => {
    return (
      elements.map((element, index) => 
        <div className="box" key={index}>
          <input type="checkbox" checked={todos[index].completed} onChange={(e) => {
            setTodos([...todos.slice(0, index), {title: todos[index].title, completed: e.target.checked}, ...todos.slice(index+1, )])
          }}/>
          <h1>{element.title}</h1>
          <button className="button" onClick={(e) => setTodos([...todos.slice(0, index), ...todos.slice(index+1, )])}>Delete</button>
        </div>
      )
    )
  }

  return (
    <div className="container">
      <div className="app">
        <h1>Todo App</h1>
        <label>
          Title
          <input
            className="textField"
            onChange={whenChange}
            type="text"
            placeholder="Hit the sack."
          />
        </label>
        <div className="toolbar">
          <button onClick={addTodo} className="button button-add">
            Add
          </button>
        </div>
        <hr />

        <div>
          {
            todos.length == 0 ? <p className="not-found">No todos found</p> : <CreateBoxs elements={todos}/>
          }
        </div>
      </div>
    </div>
  );
}




export default App;
