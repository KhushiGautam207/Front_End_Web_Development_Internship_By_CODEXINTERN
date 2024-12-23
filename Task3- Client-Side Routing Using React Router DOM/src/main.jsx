import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Blog from './components/Blog.jsx'

const router = createBrowserRouter([
  {
    Path:"/",
    element: <App/>,
    children:[
      {
        path: "",
        element:<Hero/>
      },
      {
        path: "feature",
        element: <Feature/>
      },
      {
        path: "blog",
        element: <Blog />
      }



    ]
  }
]
  
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
