import { cn } from '@/shared/lib'
import { buttonVariants } from '@/shared/ui'
import { Link, useLocation } from 'react-router-dom'

export function SettingsNav({ items = [], className, ...props }) {
  const { pathname } = useLocation()

  return (
    <nav className={cn('flex flex-col gap-1', className)} {...props}>
      {items.map(({ title, href }) => (
        <Link
          key={href}
          to={href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === href
              ? '!bg-primary !text-primary-foreground !hover:text-primary-foreground !hover:bg-primary !active:bg-primary !active:text-primary-foreground !cursor-default'
              : '!hover:bg-muted !text-muted-foreground',
            'justify-start',
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}
