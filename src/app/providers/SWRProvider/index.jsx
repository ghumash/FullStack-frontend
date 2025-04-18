import { SWRConfig } from 'swr'
import { api } from '@/shared/service'
import { notifyError } from '@/shared/lib'

const fetcher = (url) => api.get(url, { withCredentials: true }).then((res) => res.data)

export const SWRProvider = ({ children }) => (
  <SWRConfig
    value={{
      fetcher,
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
      onError: (err) => {
        const message = err?.response?.data?.message || 'Something went wrong. Please try again later.'
        notifyError(message)
      },
    }}
  >
    {children}
  </SWRConfig>
)
