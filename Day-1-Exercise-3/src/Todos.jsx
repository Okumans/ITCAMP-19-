import TodoItem from "./TodoItem";

function Todos({ todos, deleteTodo, checkTodo  }) {
  return (
    <>
      {todos.length === 0 && <div className="text-center font-normal text-gray-400">No todos found</div>}

      <div className="flex-col flex gap-1">
        {todos.map((todo, index) => (
          <div key={index} className="">
            <TodoItem
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
