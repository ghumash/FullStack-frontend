import { toast } from 'sonner'
import { Spinner } from '@/shared/ui'

// Primary
export const notify = (message, options) => toast(message, options)
export const notifySuccess = (message, options) => toast.success(message, options)
export const notifyError = (message, options) => toast.error(message, options)
export const notifyInfo = (message, options) => toast.info(message, options)
export const notifyWarning = (message, options) => toast.warning(message, options)

// With Action
export const notifyWithAction = (message, label = 'Undo', onClick = () => {}) =>
  toast(message, {
    action: {
      label,
      onClick,
    },
  })

// With Cancel
export const notifyWithCancel = (message, label = 'Cancel', onClick = () => {}) =>
  toast(message, {
    cancel: {
      label,
      onClick,
    },
  })

// Notify Promise
export const notifyPromise = (
  promiseFn,
  { loading = <Spinner />, success = (data) => `Done: ${JSON.stringify(data)}`, error = 'Something went wrong' } = {},
) => {
  return toast.promise(promiseFn, {
    loading,
    success,
    error,
  })
}
