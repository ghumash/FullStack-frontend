import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { API } from '@/shared/constants'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

const refreshAuthLogic = async () => {
  try {
    await api.post(API.AUTH.REFRESH)
    return Promise.resolve()
  } catch (err) {
    window.location.href = '/login'
    return Promise.reject(err)
  }
}

createAuthRefreshInterceptor(api, refreshAuthLogic, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true,
})
