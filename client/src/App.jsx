import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import About from "./pages/About";
import { useSelector } from "react-redux";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>404 Not found</h1>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: currentUser ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "/register",
          element: currentUser ? <Navigate to="/" /> : <Register />,
        },
        {
          path: "/profile",
          element: currentUser ? <Profile /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
