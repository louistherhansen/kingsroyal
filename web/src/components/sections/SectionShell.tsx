import { cn } from "@/lib/utils"

export type SectionShellProps = {
  id: string
  className?: string
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function SectionShell({
  id,
  className,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border/60 bg-background",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="font-heading text-xs tracking-[0.18em] uppercase text-[color:var(--lux-gold-highlight)] opacity-70">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-gold-gradient sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}

