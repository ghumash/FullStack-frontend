import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main className="flex-1 flex flex-col">
      <Outlet />
    </main>
  )
}
