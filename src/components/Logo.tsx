import clsx from 'clsx'

export function Logomark({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-lg font-display text-[11px] font-black tracking-tight text-white',
        className,
      )}
      style={{ background: 'var(--accent)', width: 28, height: 28 }}
    >
      OS
    </div>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center gap-2.5', className)}>
      <Logomark />
      <span className="font-display text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
        OpScaler
      </span>
    </div>
  )
}
