import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import { getRouteLogin } from '@/shared/lib'

export const SignInButton = ({ ...props }) => {
  const navigate = useNavigate()

  return (
    <Button type="submit" onClick={() => navigate(getRouteLogin())} {...props}>
      Sign In
    </Button>
  )
}
