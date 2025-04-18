import {
  AboutPage,
  DashboardDashboardPage,
  DashboardUsersPage,
  ForbiddenPage,
  GetHelpPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  SettingsAppearancePage,
  SettingsProfilePage,
  SettingsSecurityPage,
} from '@/pages'
import {
  getRouteAbout,
  getRouteDashboard,
  getRouteLogin,
  getRouteMain,
  getRouteRegister,
  getRouteForbidden,
  getRouteSettings,
  getRouteSettingsSecurity,
  getRouteSettingsAppearance,
  getRouteDashboardUsers,
  getRouteGetHelp,
} from '@/shared/lib'
import { DashboardLayout, MainLayout, SettingsLayout } from '@/layouts'

export const routes = [
  {
    path: getRouteMain(),
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: getRouteLogin(),
        element: <LoginPage />,
        guestOnly: true,
      },
      {
        path: getRouteRegister(),
        element: <RegisterPage />,
        guestOnly: true,
      },
      {
        path: getRouteAbout(),
        element: <AboutPage />,
      },
      {
        path: getRouteGetHelp(),
        element: <GetHelpPage />,
      },
    ],
  },
  {
    path: getRouteDashboard(),
    element: <DashboardLayout />,
    authOnly: true,
    roles: ['admin'],
    children: [
      {
        index: true,
        element: <DashboardDashboardPage />,
      },
      {
        path: getRouteDashboardUsers(),
        element: <DashboardUsersPage />,
      },
    ],
  },
  {
    path: getRouteSettings(),
    element: <SettingsLayout />,
    authOnly: true,
    children: [
      {
        index: true,
        element: <SettingsProfilePage />,
      },
      {
        path: getRouteSettingsSecurity(),
        element: <SettingsSecurityPage />,
      },
      {
        path: getRouteSettingsAppearance(),
        element: <SettingsAppearancePage />,
      },
    ],
  },
  {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]
