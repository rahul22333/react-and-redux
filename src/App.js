import './App.css';
import Cart from './pages/cart';
import Main from './pages/main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([{
  path:"/",
  element:<Main/>,
},
{
    path:"/cart",
    element:<Cart/>,
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
