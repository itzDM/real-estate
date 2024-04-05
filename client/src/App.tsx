import "./App.css";
import About from "./pages/about/about.tsx";
import Agents from "./pages/agents/agents.tsx";
import Home from "./pages/home/home.tsx";
import Layout from "./layout/layout.tsx";
import Login from "./pages/login/login.tsx";
import PlaceDetails from "./pages/placeDetails/placeDetails.tsx";
import PlaceList from "./pages/placeList/placeLIst.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
          path: "/sign-in",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
