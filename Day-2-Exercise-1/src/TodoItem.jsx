import { Link } from "react-router-dom";

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <Link to={"/"+index}>
      <div
        key={index}
        className="flex justify-between items-center border shadow rounded p-2 hover:bg-gray-50 duration-75"
      >
        <div className="flex items-center gap-2">
          <span className={todo.completed ? "line-through" : ""}>
            {todo.title}
          </span>
        </div>
        <Link to="/">
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(index);
          }}
          className="p-2 rounded bg-red-500 hover:bg-red-400 active:bg-red-500 active:scale-95 text-white transition"
        >
          Delete
        </button>
        </Link>
      </div>
    </Link>
  );
}

export default TodoItem;
