import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";
import HomePage from "./pages/HomePage"
import InfoPage from "./pages/InfoPage"
import {RouterProvider, createBrowserRouter} from "react-router-dom"



function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const routes = createBrowserRouter([  
    {
      path: "/",
      element: <HomePage todos={todos} setTodos={setTodos} title={title} setTitle={setTitle} description={description} setDescription={setDescription}/>
    },
    {
      path: "/:id",
      element: <InfoPage todos={todos} setTodos={setTodos}/>
    }
  ])
  
  return (
  <>
    <RouterProvider router={routes}/>
  </>
  )
}

export default App;
