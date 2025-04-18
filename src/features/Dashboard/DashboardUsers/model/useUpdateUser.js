import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { notifySuccess, notifyError } from '@/shared/lib'
import { useUsers } from './store'
import { API } from '@/shared/constants'

const fetcher = async (url, { arg }) => {
  const res = await api.put(`${url}/${arg._id}`, arg, { withCredentials: true })
  return res.data
}

export const useUpdateUser = () => {
  const { updateUser } = useUsers()

  return useSWRMutation(API.DASHBOARD.USERS, fetcher, {
    onSuccess: ({ user, message }) => {
      if (user) {
        updateUser(user)
        notifySuccess(message)
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
    revalidate: false,
  })
}
