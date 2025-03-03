import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './components/page/Home.tsx'
import Thesis from './components/page/Thesis.tsx'


const router = createBrowserRouter([
  {path : "/", element : <App/>, 
    children : [ 
      { path : "/", element: <Navigate to="/home" replace /> },
      { path : "/home", element : <Home/>},
      { path : "/thesis", element : <Thesis/>}
      ]}
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
