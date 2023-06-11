import ContextApp from "./components/context/ContextApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/views/Login";
import RegisterUser from "./components/views/RegisterUser";
import Dashboard from "./components/views/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/register", element: <RegisterUser /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "*", element: <Login /> },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
