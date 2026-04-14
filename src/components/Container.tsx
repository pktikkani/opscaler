import clsx from 'clsx'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx('mx-auto max-w-[1120px] px-6', className)}>
      {children}
    </div>
  )
}
