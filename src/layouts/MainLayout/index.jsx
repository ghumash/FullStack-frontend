import { Navbar, Footer, Content } from '@/widgets'

const MainLayout = () => {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default MainLayout
