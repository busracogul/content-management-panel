import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContentPage from "./ContentPage";
import { Toaster } from "./components/ui/sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contents",
    element: <ContentPage />,
  },
  {
    path: "/contents/:id",
    element: <ContentPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
