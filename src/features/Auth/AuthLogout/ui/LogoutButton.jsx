import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import { getRouteMain } from '@/shared/lib'
import { useLogout } from '@/features/Auth'

export const LogoutButton = () => {
  const navigate = useNavigate()
  const { trigger } = useLogout()

  const handleLogout = async () => {
    try {
      await trigger()
      navigate(getRouteMain())
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Button type="submit" variant="ghost" onClick={handleLogout}>
      Logout
    </Button>
  )
}
