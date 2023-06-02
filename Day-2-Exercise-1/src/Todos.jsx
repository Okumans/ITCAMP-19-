import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";

function Todos({ todos, deleteTodo}) {
  return (
    <>
      {todos.length === 0 && (
        <div className="text-center text-gray-500">No todos found</div>
      )}

      <div className="space-y-2">
        {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                deleteTodo={deleteTodo}
              />
        ))}
      </div>
    </>
  );
}

export default Todos;
