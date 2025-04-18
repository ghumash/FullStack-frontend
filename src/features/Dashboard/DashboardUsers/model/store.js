import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  users: [],
}

export const useUsers = create(
  persist(
    (set) => ({
      ...initialState,
      setUsers: (users) => set({ users }),
      addUser: (user) => set((state) => ({ users: [...state.users, user] })),
      updateUser: (updated) =>
        set((state) => ({
          users: state.users.map((u) => (u._id === updated._id ? { ...u, ...updated } : u)),
        })),
      removeUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u._id !== id),
        })),
    }),
    { name: 'users' },
  ),
)
