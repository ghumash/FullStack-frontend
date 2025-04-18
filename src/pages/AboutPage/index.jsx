import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui'
import { siteConfig } from '@/shared/config'

const features = [
  {
    title: 'Modern Tech Stack',
    description:
      'Built with React, Vite, Zustand, SWR, Axios and Tailwind CSS for lightning-fast performance and modern development experience.',
  },
  {
    title: 'Flexible Role-Based Access',
    description: 'AuthGuard and RoleGuard logic ensure secure access to pages based on user roles and auth state.',
  },
  {
    title: 'Dark / Light Theme Support',
    description: 'System-based theming with smooth switching for better UX across all devices.',
  },
  {
    title: 'Reusable UI Components',
    description: 'Powered by shadcn/ui components to keep your UI consistent, accessible and beautiful.',
  },
  {
    title: 'Secure Authentication',
    description: 'Access and Refresh tokens are stored in httpOnly cookies with auto-refresh support for maximum security.',
  },
  {
    title: 'Optimized Project Structure',
    description:
      'Follows a simplified Feature-Sliced Design (FSD) architecture for better scalability, readability, and maintainability.',
  },
]

const AboutPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About {siteConfig.name}</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
          A modern web application starter built for developers who want speed, security and simplicity.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Card key={i} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{feature.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
