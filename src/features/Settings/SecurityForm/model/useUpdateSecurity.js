import useSWRMutation from 'swr/mutation'
import { api } from '@/shared/service'
import { notifyError, notifySuccess } from '@/shared/lib'
import { API } from '@/shared/constants'

const updateSecurity = async (url, { arg }) => {
  const res = await api.put(url, arg, { withCredentials: true })
  return res.data
}

export const useUpdateSecurity = () => {
  return useSWRMutation(API.SETTINGS.SECURITY, updateSecurity, {
    onSuccess: ({ message }) => {
      notifySuccess(message)
    },
    onError: (error) => {
      const message = error?.response?.data?.message
      notifyError(message)
    },
  })
}
