import { createBrowserRouter } from 'react-router-dom';
import { Chat } from '../screens/Chat';
import { Home } from '../screens/Home';

export const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home/>
  },
  {
    path: '/chat',
    element: <Chat/>
  }
])