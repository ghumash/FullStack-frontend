import { siteConfig } from '@/shared/config'
import { getRouteGetHelp } from '@/shared/lib/index.js'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="border-t border-grid h-14 text-sm text-muted-foreground flex items-center">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
        © {new Date().getFullYear()} <span className="font-semibold text-foreground">{siteConfig.name}</span>. All rights
        reserved.{' '}
        <NavLink to={getRouteGetHelp()} className="text-primary hover:underline text-sm mt-2 sm:mt-0">
          Need help?
        </NavLink>
      </div>
    </footer>
  )
}
