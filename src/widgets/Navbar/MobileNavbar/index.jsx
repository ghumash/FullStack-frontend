import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Icons,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/shared/ui'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '@/shared/config'
import { SignInButton, LogoutButton } from '@/features/Auth'
import { ThemeSwitcher } from '@/features'
import { useUser } from '@/entities/User'
import { MenuIcon } from 'lucide-react'
import { cn } from '@/shared/lib'

export const MobileNavbar = ({ navItems }) => {
  const { user, isAuth } = useUser()

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-14 px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <NavLink to="/" className="font-semibold text-lg">
        {siteConfig.name}
      </NavLink>

      <div className="flex items-center gap-2">
        <Button asChild variant="ghost">
          <NavLink to={siteConfig.links.github} target="_blank">
            <Icons.gitHub />
          </NavLink>
        </Button>
        <ThemeSwitcher />
        {!isAuth && <SignInButton />}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-0 w-[250px]">
            <SheetHeader className="sr-only">
              <SheetTitle>Mobile Navigation</SheetTitle>
              <SheetDescription>Main site menu</SheetDescription>
            </SheetHeader>

            <div className="flex flex-col h-full">
              {isAuth && user && (
                <div className="flex items-center gap-3 p-4 border-b">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar} alt={user.firstName} />
                    <AvatarFallback>
                      {user.firstName?.[0]}
                      {user.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Hi, {user.firstName || 'friend'}!</span>
                    {user.email && <span className="text-xs text-muted-foreground">{user.email}</span>}
                  </div>
                </div>
              )}

              <div className="flex-1 flex items-center">
                <nav className="flex flex-col gap-1 px-4 py-4 text-sm w-full">
                  {navItems.map(({ label, to }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-md px-3 py-2 transition-colors',
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                        )
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="mt-auto flex flex-col gap-2 p-2 border-t">
                {!isAuth ? <SignInButton variant="ghost" /> : <LogoutButton />}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
