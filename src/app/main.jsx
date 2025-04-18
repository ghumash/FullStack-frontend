import { StrictMode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'

import { Toaster } from 'sonner'
import './styles/globals.css'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { AppErrorBoundary } from '../app/providers/AppErrorBoundary'
import AppRouter from './providers/RouterProvider/ui/AppRouter.jsx'
import { SWRProvider } from './providers/SWRProvider'

Sentry.init({
  dsn: "https://d422d7c6a6c630098243afbfd238f613@o4509174424862720.ingest.de.sentry.io/4509174453960784"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppErrorBoundary>
      <BrowserRouter
        future={{
          v7_startTransition: false,
          v7_relativeSplatPath: false,
        }}
      >
        <SWRProvider>
          <ThemeProvider defaultTheme="system">
            <Suspense fallback="">
              <AppRouter />
              <Toaster
                richColors
                position="top-right"
                duration={2000}
                toastOptions={{
                  classNames: {
                    toast: '!bg-primary !text-primary-foreground !border !border-primary !shadow-lg',
                    actionButton: '!text-primary !bg-primary-foreground',
                    cancelButton: '!text-primary !bg-primary-foreground',
                  },
                }}
              />
            </Suspense>
          </ThemeProvider>
        </SWRProvider>
      </BrowserRouter>
    </AppErrorBoundary>
  </StrictMode>,
)
