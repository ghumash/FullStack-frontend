import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  user: null,
  isAuth: false,
}

export const useUser = create(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user) => set({ user }),
      login: (user) => set({ user, isAuth: true }),
      logout: () => set({ user: null, isAuth: false }),
    }),
    {
      name: 'user',
    },
  ),
)
