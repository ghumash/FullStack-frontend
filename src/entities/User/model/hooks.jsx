import { useUser } from './store.js'

export const useAccess = () => {
  const { isAuth, user } = useUser()
  const userRoles = user?.roles || []

  const hasRoles = (roles) => {
    if (!roles) return true
    return isAuth && roles.some((role) => userRoles.includes(role))
  }

  const filterByAccess = (items) => {
    return items.filter((item) => {
      const hasRequiredRoles = hasRoles(item.roles)

      const isAllowed = (item.authOnly && isAuth) || (item.guestOnly && !isAuth) || (!item.authOnly && !item.guestOnly)

      return hasRequiredRoles && isAllowed
    })
  }

  return { hasRoles, filterByAccess }
}
