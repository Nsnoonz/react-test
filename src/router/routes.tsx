
import { lazy } from "react"
const Home = lazy(() => import('../pages/PageHome'));
const Project = lazy(() => import('../pages/Project/Main'));
const ErrorPage = lazy(() => import('../pages/PageError'))
const routes = [
  {
    path: '/',
    element: <Project />,
    errorElement: <ErrorPage />,
    layout: ''
  },
  {
    path: '/Index',
    element: <Home />,
    errorElement: <ErrorPage />,
    layout: ''
  },
  {
    path: '/Project',
    element: <Project />,
    errorElement: <ErrorPage />,
    layout: ''
  }
]

export { routes }