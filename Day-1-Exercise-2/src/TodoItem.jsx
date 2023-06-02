function TodoItem({ todo, index, deleteTodo, checkTodo, changeTodo}) {
  return (
    <div key={index} className="todo">
    <div className="todo-title">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => checkTodo(e, index)}
      />

      <input type="text" className={todo.completed ? "checked" : ""} defaultValue={todo.title} onChange={(e)=>changeTodo(e, index)}/>
    </div>
    <button onClick={() => deleteTodo(index)} className="button button-delete">
      Delete
    </button>
  </div>
  );
}

export default TodoItem;
