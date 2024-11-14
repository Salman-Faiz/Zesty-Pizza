import Menu from './features/menu/Menu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './ui/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/menu",
    element: <Menu></Menu>
  },
]);


function App() {
  return  <RouterProvider router={router} />
}

export default App
