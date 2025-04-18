import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { routes } from '../config/routes.jsx'
import { useUser } from '@/entities/User'
import { Loader } from '@/shared/ui'

const AppRouter = () => {
  const { isAuth } = useUser()

  const renderWithWrapper = (route) => {
    const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>

    if (route.guestOnly) {
      return <Route key={route.path} path={route.path} element={isAuth ? <Navigate to="/" /> : element} />
    }

    if (route.authOnly) {
      return (
        <Route key={route.path} path={route.path} element={<RequireAuth roles={route.roles}>{element}</RequireAuth>}>
          {route.children?.map((child) => (
            <Route
              index={child.index}
              key={child.path || 'index'}
              path={child.path}
              element={
                <RequireAuth roles={route.roles}>
                  <Suspense fallback={<Loader />}>{child.element}</Suspense>
                </RequireAuth>
              }
            />
          ))}
        </Route>
      )
    }

    return (
      <Route key={route.path} path={route.path} element={element}>
        {route.children?.map((child) => (
          <Route
            index={child.index}
            key={child.path || 'index'}
            path={child.path}
            element={<Suspense fallback={<Loader />}>{child.element}</Suspense>}
          />
        ))}
      </Route>
    )
  }

  return <Routes>{routes.map(renderWithWrapper)}</Routes>
}

export default AppRouter
