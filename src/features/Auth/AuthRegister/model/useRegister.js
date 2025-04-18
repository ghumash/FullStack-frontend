import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { useUser } from '@/entities/User'
import { notifySuccess, notifyError } from '@/shared/lib'
import { API } from '@/shared/constants'

const fetcher = async (url, { arg }) => {
  const res = await api.post(url, arg, { withCredentials: true })
  return res.data
}

export const useRegister = () => {
  const { login } = useUser()

  return useSWRMutation(API.AUTH.REGISTER, fetcher, {
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
