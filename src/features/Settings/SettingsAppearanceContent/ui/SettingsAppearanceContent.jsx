import { RadioGroup, RadioGroupItem } from '@/shared/ui'
import { useTheme } from '@/shared/hooks'

export const SettingsAppearanceContent = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <label className="text-sm font-medium">Theme</label>
        <p className="text-sm text-muted-foreground">Select the theme for the interface.</p>
        <RadioGroup onValueChange={setTheme} defaultValue={theme} className="grid max-w-md grid-cols-3 gap-8 pt-2">
          <label className="cursor-pointer [&:has([data-state=checked])>div]:border-primary">
            <RadioGroupItem value="light" className="sr-only" />
            <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
              <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal">Light</span>
          </label>

          <label className="cursor-pointer [&:has([data-state=checked])>div]:border-primary">
            <RadioGroupItem value="dark" className="sr-only" />
            <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
              <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-400" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal">Dark</span>
          </label>

          <label className="cursor-pointer [&:has([data-state=checked])>div]:border-primary">
            <RadioGroupItem value="system" className="sr-only" />
            <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
              <div className="space-y-2 rounded-sm bg-gradient-to-br from-white to-slate-900 p-2">
                <div className="space-y-2 rounded-md bg-white/60 p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-slate-400/60" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400/60" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white/60 p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-400/60" />
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400/60" />
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal">System</span>
          </label>
        </RadioGroup>
      </div>
    </div>
  )
}
