// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import About from '../views/About';
import Home from  '../views/Home';
import Contact from '../views/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
     
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;