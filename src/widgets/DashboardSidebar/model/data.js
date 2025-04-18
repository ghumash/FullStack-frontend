import { IconDashboard, IconUsers } from '@tabler/icons-react'
import {
  getRouteAbout,
  getRouteDashboard,
  getRouteDashboardUsers,
  getRouteGetHelp,
  getRouteMain,
  getRouteSettings,
} from '@/shared/lib'

const appUrl = import.meta.env.VITE_APP_URL

export const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: getRouteDashboard(),
      icon: IconDashboard,
    },
    {
      title: 'Users',
      url: getRouteDashboardUsers(),
      icon: IconUsers,
    },
  ],
  navSecondary: [
    {
      title: 'Home',
      url: `${appUrl}${getRouteMain()}`,
    },
    {
      title: 'About',
      url: `${appUrl}${getRouteAbout()}`,
    },
    {
      title: 'Settings',
      url: `${appUrl}${getRouteSettings()}`,
    },
    {
      title: 'Get Help',
      url: `${appUrl}${getRouteGetHelp()}`,
      // icon: IconHelp,
    },
  ],
}
