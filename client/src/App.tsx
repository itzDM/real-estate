import "./App.css";
import About from "./pages/about/about.tsx";
import Agents from "./pages/agents/agents.tsx";
import Home from "./pages/home/home.tsx";
import Layout from "./layout/layout.tsx";
import Login from "./pages/login/login.tsx";
import PlaceDetails from "./pages/placeDetails/placeDetails.tsx";
import PlaceList from "./pages/placeList/placeLIst.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/register/register.tsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <PlaceDetails />,
        },
        {
          path: "/placeList",
          element: <PlaceList />,
        },
        {
          path: "/agents",
          element: <Agents />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
