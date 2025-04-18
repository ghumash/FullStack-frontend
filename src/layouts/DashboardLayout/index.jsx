import { SidebarInset, SidebarProvider } from '@/shared/ui'
import { DashboardContent, DashboardHeader, DashboardFooter, DashboardSidebar } from '@/widgets'

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar variant="floating" />
      <SidebarInset>
        <DashboardHeader />
        <DashboardContent />
        <DashboardFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
