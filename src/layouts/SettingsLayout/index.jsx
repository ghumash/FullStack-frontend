import { SettingsNav } from '@/features/Settings'
import { Separator } from '@/shared/ui'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '@/widgets'
import { getRouteSettings, getRouteSettingsAppearance, getRouteSettingsSecurity } from '@/shared/lib/index.js'

const sidebarNavItems = [
  { title: 'Profile', href: getRouteSettings() },
  { title: 'Security', href: getRouteSettingsSecurity() },
  { title: 'Appearance', href: getRouteSettingsAppearance() },
]

const SettingsLayout = () => {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground text-sm">Manage your account settings.</p>
        </div>

        <Separator />

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="lg:w-1/4">
            <SettingsNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SettingsLayout
