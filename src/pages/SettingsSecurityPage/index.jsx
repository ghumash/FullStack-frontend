import { Separator } from '@/shared/ui'
import { SecurityForm } from '@/features/Settings'

const SettingsSecurityPage = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Security</h3>
      <p className="text-sm text-muted-foreground">Update your password to keep your account safe.</p>
      <Separator />
      <SecurityForm />
    </div>
  )
}

export default SettingsSecurityPage
