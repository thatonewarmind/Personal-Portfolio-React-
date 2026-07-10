import type { HTMLAttributes } from 'react'

export function Container({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const classes = ['container', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
