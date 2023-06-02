import TodoItem from "./TodoItem";

function Todos({ todos, deleteTodo, checkTodo, changeTodo}) {
  // คำใบ้ก็คือ เราใช้ todos.map(todo => ...อะไรต่ออน้า)
  return (
    <div className="todos">
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo} changeTodo={changeTodo}/>
    ))}
  </div>
  );
}

export default Todos;
