import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode, Suspense } from 'react'
import { AppErrorBoundary } from '../app/providers/AppErrorBoundary'
import AppRouter from './providers/RouterProvider/ui/AppRouter.jsx'
import { SWRProvider } from './providers/SWRProvider'
import { Toaster } from 'sonner'

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
