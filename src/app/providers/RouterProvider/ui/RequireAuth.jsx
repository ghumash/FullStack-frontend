import { Navigate } from 'react-router-dom'
import { getRouteForbidden, getRouteLogin } from '@/shared/lib'
import { useUser } from '@/entities/User'

export function RequireAuth({ children, roles }) {
  const { user, isAuth } = useUser()
  const userRoles = user?.roles

  const hasRequiredRoles = () => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole)
    })
  }

  if (!isAuth) {
    return <Navigate to={getRouteLogin()} replace state={{ from: { pathname: location.pathname } }} />
  }

  if (!hasRequiredRoles()) {
    return <Navigate to={getRouteForbidden()} replace state={{ from: { pathname: location.pathname } }} />
  }

  return children
}
