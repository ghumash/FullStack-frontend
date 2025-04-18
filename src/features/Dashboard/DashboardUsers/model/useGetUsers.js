import useSWR from 'swr'
import { api } from '@/shared/service'
import { notifyError } from '@/shared/lib'
import { useUsers } from './store'
import { API } from '@/shared/constants'

const fetcher = async (url) => {
  const res = await api.get(url, { withCredentials: true })
  return res.data
}

export const useGetUsers = () => {
  const { users, setUsers } = useUsers()
  const { error, isLoading } = useSWR(API.DASHBOARD.USERS, fetcher, {
    onSuccess: ({ users }) => {
      setUsers(users || [])
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
  })

  return {
    users,
    isLoading,
    error,
  }
}
