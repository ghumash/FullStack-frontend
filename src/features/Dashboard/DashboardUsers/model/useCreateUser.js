import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { notifySuccess, notifyError } from '@/shared/lib'
import { useUsers } from './store'
import { API } from '@/shared/constants'

const fetcher = async (url, { arg }) => {
  const res = await api.post(url, arg, { withCredentials: true })
  return res.data
}

export const useCreateUser = () => {
  const { addUser } = useUsers()

  return useSWRMutation(API.DASHBOARD.USERS, fetcher, {
    onSuccess: ({ user, message }) => {
      addUser(user)
      notifySuccess(message)
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
    revalidate: false,
  })
}
