import { createBrowserRouter } from 'react-router-dom'
import { Character, Characters, Favourites } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Characters />,
  },
  {
    path: '/character/:id',
    element: <Character />,
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
])
