import { useState } from 'react'
import './App.css'
import Login from './components/templates/Login'
import Home from './components/templates/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

const App = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  return (
    // Ideally, instead of <Home /> You'd have the entire app, and redirect all other url hits to <Login />
    // !userIsLoggedIn ? <Login /> : <Home />
    <RouterProvider router={router} />
  )
}

export default App
