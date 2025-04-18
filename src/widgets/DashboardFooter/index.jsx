import { Separator } from '@/shared/ui'
import { siteConfig } from '@/shared/config'

export const DashboardFooter = () => {
  return (
    <footer className="flex h-12 shrink-0 items-center gap-2 border-t transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">{siteConfig.name}</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
