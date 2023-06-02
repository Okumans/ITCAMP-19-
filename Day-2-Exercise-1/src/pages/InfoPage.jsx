import { useState } from "react";
import { useParams } from "react-router-dom";

const InfoPage = ({ todos }) => {
  const { id } = useParams();
  console.log(id, todos[id], todos[id].title);
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
            value={todos.title}
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
};

export default InfoPage;
