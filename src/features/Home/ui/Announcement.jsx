import { NavLink } from 'react-router-dom'
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import { getRouteDashboard } from '@/shared/lib'

export function Announcement() {
  return (
    <NavLink to={getRouteDashboard()} className="group mb-2 inline-flex items-center gap-2 px-0.5 text-sm font-medium">
      <LayoutDashboard className="h-4 w-4" />
      <span className="underline-offset-4 group-hover:underline">Go to the Dashboard!</span>
      <ArrowRight className="ml-1 h-4 w-4" />
    </NavLink>
  )
}
