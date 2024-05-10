import './App.css';
import Games from './Componets/Game';
import Info from './Componets/Game/info';
import Active from './Page/active';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Active />,
    },
    { 
      path: "/game",
      element: <Games />,
    },
    { 
      path: "/game/info",
      element: <Info />,
    },
    { 
      path: "/gamevh",
      element: <Info />,
    },
    { 
      path: "/news",
      element: <Info />,
    },
    { 
      path: "/about-us",
      element: <Info />,
    }
  ]);
  return <RouterProvider router={router} />;
}