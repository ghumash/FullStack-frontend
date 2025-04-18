import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/features/Home'
import { Button, Icons } from '@/shared/ui'
import { Announcement } from '@/features/Home'
import { siteConfig } from '@/shared/config'
import { SignInButton } from '@/features/Auth'

const content = {
  title: 'This is a production website.',
  description:
    'The project is built on a modern frontend stack: React with' +
    ' Vite, Zustand for global state management, SWR for data fetching, Axios with interceptors, and shadcn/ui combined with Tailwind CSS for UI components and styling. It follows a simplified Feature-Sliced Design architecture. Routing is handled using react-router with support for AuthGuard and RoleGuard. The app supports both light and dark themes with system-based switching. Components are reusable and well-structured.',
  description_2:
    'On the backend, the project uses Node.js with Express, MongoDB, and JWT. Security measures include httpOnly cookies, refresh/access tokens, Helmet, CORS, rate limiting, sanitize-html, and protection against XSS and CSRF attacks.',
}

const HomePage = () => {
  const { title, description, description_2 } = content

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageHeaderDescription>{description_2}</PageHeaderDescription>
        <PageActions>
          <SignInButton />
          <Button asChild variant="ghost">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub />
              <span className="">go to GitHub</span>
            </a>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  )
}
export default HomePage
