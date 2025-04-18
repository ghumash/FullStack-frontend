import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { siteConfig } from '@/shared/config'
import { Button, Icons } from '@/shared/ui'
import { SignInButton } from '@/features/Auth'
import { ThemeSwitcher, UserDropdown } from '@/features'
import { useUser } from '@/entities/User'

export const DesktopNavbar = ({ navItems }) => {
  const { isAuth } = useUser()
  const filteredNavItems = navItems.filter((item) => !item.mobileOnly)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto sm:px-6 lg:px-8 h-14">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-lg">
          {siteConfig.name}
        </NavLink>

        <nav className="hidden md:flex gap-6 text-sm">
          {filteredNavItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  'transition-colors font-medium',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          <ThemeSwitcher />

          {isAuth ? <UserDropdown /> : <SignInButton />}
        </div>
      </div>
    </header>
  )
}
