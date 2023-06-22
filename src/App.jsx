import ContextApp from "./components/context/ContextApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/views/Login";
import RegisterUser from "./components/views/RegisterUser";
import Dashboard from "./components/views/Dashboard";
import PrivateDashboard from "./private/PrivateDashboard";
import PrivateLogin from "./private/PrivateLogin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateLogin>
          <Login />
        </PrivateLogin>
      ),
    },
    { path: "/register", element: <RegisterUser /> },
    {
      path: "/dashboard/*",
      element: (
        <PrivateDashboard>
          <Dashboard />
        </PrivateDashboard>
      ),
    },
    {
      path: "*",
      element: <Login />,
    },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
