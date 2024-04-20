import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthAndAgentPages, AuthPages, Layout } from "./layout/layout.tsx";
import About from "./pages/about/about.tsx";
import Agents from "./pages/agents/agents.tsx";
import CreatePost from "./pages/create/create.tsx";
import Home from "./pages/home/home.tsx";
import Login from "./pages/login/login.tsx";
import PlaceDetails from "./pages/placeDetails/placeDetails.tsx";
import PlaceList from "./pages/placeList/placeLIst.tsx";
import { UserProfile } from "./pages/profile/userProfile.tsx";
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
    {
      path: "/",
      element: <AuthPages />,
      children: [
        {
          path: "/profile",
          element: <UserProfile />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthAndAgentPages />,
      children: [
        {
          path: "/create",
          element: <CreatePost />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
