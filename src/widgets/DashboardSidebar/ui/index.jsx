import { Link } from 'react-router-dom'
import { IconInnerShadowTop } from '@tabler/icons-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui'
import { siteConfig } from '@/shared/config'
import { data } from '../model/data.js'
import { NavMain } from './NavMain.jsx'
import { NavSecondary } from './NavSecondary.jsx'
import { getRouteMain } from '@/shared/lib'
import { LogoutButton } from '@/features/Auth/index.js'

export function DashboardSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link to={getRouteMain()}>
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">{siteConfig.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
