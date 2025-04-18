import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { useUser } from '@/entities/User'
import { notifyError, notifySuccess } from '@/shared/lib'
import { API } from '@/shared/constants'

const fetcher = async (url, { arg }) => {
  const res = await api.put(url, arg, { withCredentials: true })
  return res.data
}

export const useUpdateProfile = () => {
  const { setUser } = useUser()

  return useSWRMutation(API.SETTINGS.PROFILE, fetcher, {
    onSuccess: ({ user, message }) => {
      setUser(user)
      notifySuccess(message)
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
  })
}
