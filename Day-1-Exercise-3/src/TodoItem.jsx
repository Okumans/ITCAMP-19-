function TodoItem({ todo, index, deleteTodo, checkTodo }) {
  return (
    <>
      <div className="drop-shadow-md border-solid border-2 border-gray-200 rounded-lg p-1.5 flex justify-between items-center">
        <div className="items-center flex gap-2">
        <input
          className="w-6 h-6 border-solid border-gray-400 border-2"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => checkTodo(e, index)}
        />

        <p className="font-bold text-base">{todo.title}</p>
        </div>
        <button onClick={() => deleteTodo(index)} className="bg-red-400 text-white text-sm font-semibold py-1.5 px-2 rounded-lg ">
        Delete
      </button>
      </div>
    </>
  );
}

export default TodoItem;
