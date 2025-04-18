import { LoginForm } from '@/features/Auth'

const LoginPage = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center px-4 md:px-20 lg:px-30">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
export default LoginPage
