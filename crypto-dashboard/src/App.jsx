import './App.css'
import Transaction from './pages/Transaction/Transaction';
import Dashboard from './pages/Dashboard/Dashboard'
import Support from './pages/Support/Support';
import "@fontsource/ubuntu"; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transaction",
    element: <Transaction/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
]);
function App() { 
  return (
    
      <div>
          <RouterProvider router={router} />
        
      </div> 
  )
}

export default App
