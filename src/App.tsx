import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/layout/default'
import GlobalStyle from './config/global.style'
import AuthLayout from './components/layout/auth'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
    // {
    //   element: <AuthLayout />,
    //   children: [
    //     { path: '/sign-in', index: true, element: <SignIn /> },
    //     {
    //       path: '/sign-up',
    //       element: <SignUp />
    //     },
    //     {
    //       path: '/forgot-password',
    //       element: <ForgotPassword />
    //     }
    //   ]
    // },
    {
      path: '/',
      index: true,
      element: <Home />
    }
  ])
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
