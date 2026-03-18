import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/home/Home";
import Hero from "./pages/home/hero/Hero";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";

import ProtectedRoute from "./middleware/protectRoute";

import Main from "./pages/main/Main";
import MyPosts from "./pages/main/myposts/MyPosts";
import Create from "./pages/main/create/Create";
import Gallery from "./pages/main/gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/main",
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "my-posts",
        index: true,
        element: <MyPosts />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
