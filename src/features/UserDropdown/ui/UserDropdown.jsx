import { useNavigate } from 'react-router-dom'
import { Settings, LogOut, LayoutDashboard } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/ui'

import { useAccess, useUser } from '@/entities/User'
import { getRouteDashboard, getRouteMain, getRouteSettings } from '@/shared/lib'
import { useLogout } from '@/features/Auth'

export const UserDropdown = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const { trigger } = useLogout()
  const { filterByAccess } = useAccess()

  const handleLogout = async () => {
    try {
      await trigger()
      navigate(getRouteMain())
    } catch (err) {
      console.error(err)
    }
  }

  const handleSettings = () => {
    navigate(getRouteSettings())
  }

  const handleDashboard = () => {
    navigate(getRouteDashboard())
  }

  const menuItems = [
    { label: 'Settings', Icon: Settings, handler: handleSettings },
    { label: 'Dashboard', Icon: LayoutDashboard, roles: ['admin'], handler: handleDashboard },
    { label: 'Logout', Icon: LogOut, handler: handleLogout },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="size-8 rounded-full border-none p-0">
          <Avatar>
            <AvatarImage src={user?.avatar || ''} alt={user?.username} />
            <AvatarFallback className="rounded-lg">{user?.username?.slice(0, 2).toUpperCase() || 'US'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-56" align="start">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5">
            <Avatar>
              <AvatarImage src={user?.avatar || ''} alt={user?.username} />
              <AvatarFallback className="rounded-lg">{user?.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold truncate">{user?.username}</span>
              <span className="text-muted-foreground text-xs truncate">{user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {filterByAccess(menuItems).map(({ label, handler, Icon }) => (
            <DropdownMenuItem onClick={handler} key={label}>
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
