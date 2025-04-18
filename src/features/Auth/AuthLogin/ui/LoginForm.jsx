import { useForm } from 'react-hook-form'
import { Button, Label, Input, Card, CardContent, CardDescription, CardHeader, CardTitle, Icons } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { useLogin } from '../model/useLogin.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { getRouteMain, getRouteRegister } from '@/shared/lib'

export const LoginForm = ({ className, ...props }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  const { trigger, isMutating, error } = useLogin()

  const pathFrom = location.state?.from?.pathname || getRouteMain()

  const onSubmit = async (data) => {
    try {
      await trigger(data)
      navigate(pathFrom, { replace: true })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your username and password to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" autoComplete="username" {...register('username', { required: true })} />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="ml-auto p-0">
                    Forgot your password?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register('password', { required: true })}
                />
              </div>

              {error && <div className="text-sm text-destructive bg-destructive/10 rounded p-2">{error}</div>}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isMutating || isSubmitting}>
                  {isMutating || isSubmitting ? 'Logging in...' : 'Login'}
                </Button>

                <Button variant="outline" className="w-full" disabled={isMutating || isSubmitting}>
                  <Icons.gitHub />
                  Login with GitHub
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Button
              type="button"
              onClick={() => navigate(getRouteRegister())}
              variant="link"
              className="px-1 h-auto text-sm font-medium text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
