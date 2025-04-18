import { cn } from '@/shared/lib'

function PageHeader({ className, children, ...props }) {
  return (
    <section className={cn('border-grid', className)} {...props}>
      <div className="container-wrapper">
        <div className="container flex flex-col items-start gap-2">{children}</div>
      </div>
    </section>
  )
}

function PageHeaderHeading({ className, ...props }) {
  return (
    <h1
      className={cn('text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]', className)}
      {...props}
    />
  )
}

function PageHeaderDescription({ className, ...props }) {
  return <p className={cn('text-balance text-base font-light text-muted-foreground', className)} {...props} />
}

function PageActions({ className, ...props }) {
  return <div className={cn('flex w-full items-center justify-start gap-2', className)} {...props} />
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
