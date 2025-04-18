import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { notifySuccess, notifyError } from '@/shared/lib'
import { useUser } from '@/entities/User'
import { API } from '@/shared/constants'

const fetcher = async (url, { arg }) => {
  const res = await api.post(url, arg, { withCredentials: true })
  return res.data
}

export const useLogin = () => {
  const { login } = useUser()

  return useSWRMutation(API.AUTH.LOGIN, fetcher, {
    onSuccess: ({ user, message }) => {
      login(user)
      notifySuccess(message)
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
  })
}
