import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { notifySuccess, notifyError } from '@/shared/lib'
import { useUser } from '@/entities/User'
import { API } from '@/shared/constants'

const fetcher = async (url) => {
  const res = await api.post(url)
  return res.data
}

export const useLogout = () => {
  const { logout } = useUser()

  return useSWRMutation(API.AUTH.LOGOUT, fetcher, {
    onSuccess: ({ message }) => {
      logout()
      notifySuccess(message)
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
  })
}
