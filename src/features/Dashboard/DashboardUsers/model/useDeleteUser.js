import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { notifySuccess, notifyError } from '@/shared/lib'
import { useUsers } from './store'
import { API } from '@/shared/constants'

const fetcher = async (url, { arg }) => {
  const res = await api.delete(`${url}/${arg}`, { withCredentials: true })
  return res.data
}

export const useDeleteUser = () => {
  const { removeUser } = useUsers()

  return useSWRMutation(API.DASHBOARD.USERS, fetcher, {
    onSuccess: ({ _id, message }) => {
      removeUser(_id)
      notifySuccess(message)
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
    revalidate: false,
  })
}
