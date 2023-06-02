import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './routes/PublicRoutes/Login'
import Register from './routes/PublicRoutes/Register'
import Home from './routes/PublicRoutes/Home'
import ErrorPage from './routes/ErrorPage'
import PHome from './routes/PrivateRoutes/PHome'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import ChangePassword from './routes/PrivateRoutes/ChangePassword'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/home',
        element: <RequireAuth> <PHome/> </RequireAuth>
      },
      {
        path: '/edituser',
        element: <RequireAuth> <ChangePassword/> </RequireAuth>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
