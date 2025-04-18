import { Separator } from '@/shared/ui'
import { SettingsAppearanceContent } from '@/features/Settings'

const SettingsAppearancePage = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Appearance</h3>
      <p className="text-sm text-muted-foreground">
        Manage how the application looks and behaves. You can customize your visual experience here.
      </p>
      <Separator />
      <SettingsAppearanceContent />
    </div>
  )
}

export default SettingsAppearancePage
