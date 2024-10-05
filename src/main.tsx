import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import PageNotFound from './pages/PageNotFound'
import Contacts from './pages/Contacts'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <PageNotFound />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contacts />
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
