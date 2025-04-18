import { useForm } from 'react-hook-form'
import { Button, Label, Input, Card, CardContent, CardDescription, CardHeader, CardTitle, Icons } from '@/shared/ui'
import { useRegister } from '../model/useRegister'
import { cn } from '@/shared/lib'
import { useNavigate } from 'react-router-dom'
import { getRouteMain, getRouteLogin } from '@/shared/lib'

export const RegisterForm = ({ className, ...props }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm()

  const { trigger, isMutating, error } = useRegister()

  const onSubmit = async (data) => {
    try {
      await trigger(data)
      navigate(getRouteMain())
    } catch (err) {
      console.error(err)
    }
  }

  const password = watch('password')

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Enter your info to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" {...register('username', { required: 'Username is required' })} />
              {errors.username && <span className="text-sm text-destructive">{errors.username.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              {errors.password && <span className="text-sm text-destructive">{errors.password.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === password || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && <span className="text-sm text-destructive">{errors.confirmPassword.message}</span>}
            </div>

            {error && <div className="text-sm text-destructive bg-destructive/10 rounded p-2">{error}</div>}

            <Button type="submit" className="w-full" disabled={isMutating || isSubmitting}>
              {isMutating || isSubmitting ? 'Registering...' : 'Register'}
            </Button>

            <Button variant="outline" className="w-full" disabled={isMutating || isSubmitting}>
              <Icons.gitHub />
              Sign up with GitHub
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Button
              type="button"
              onClick={() => navigate(getRouteLogin())}
              variant="link"
              className="px-1 h-auto text-sm font-medium text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
