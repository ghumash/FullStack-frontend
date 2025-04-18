import { Component } from 'react'
import { Button } from '@/shared/ui/button'

export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('AppErrorBoundary caught an error:', error, errorInfo)
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  goHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      const errorMessage =
        this.state.error instanceof Error
          ? this.state.error.message
          : String(this.state.error || 'An unexpected error occurred.')

      return (
        <section className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
          <div className="space-y-4 max-w-md">
            <h1 className="text-3xl font-semibold text-destructive tracking-tight">Something went wrong</h1>
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" onClick={this.goHome}>
                Go Home
              </Button>
              <Button onClick={this.reset}>Reload Page</Button>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}
