import { Home } from '../screens/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home/>
  },

])