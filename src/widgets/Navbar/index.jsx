import { getRouteAbout, getRouteDashboard, getRouteSettings } from '@/shared/lib'
import { useIsMobile } from '@/shared/hooks/use-mobile.js'
import { MobileNavbar } from './MobileNavbar'
import { DesktopNavbar } from './DesktopNavbar'
import { useAccess } from '@/entities/User'

const navItems = [
  { label: 'About', to: getRouteAbout() },
  { label: 'Dashboard', to: getRouteDashboard(), roles: ['admin'], mobileOnly: true, authOnly: true },
  { label: 'Settings', to: getRouteSettings(), mobileOnly: true, authOnly: true },
]

export const Navbar = () => {
  const isMobile = useIsMobile()
  const { filterByAccess } = useAccess()

  const filteredByAccess = filterByAccess(navItems)

  return isMobile ? <MobileNavbar navItems={filteredByAccess} /> : <DesktopNavbar navItems={filteredByAccess} />
}
