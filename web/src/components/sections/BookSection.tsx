import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { SectionShell } from "./SectionShell"

export function BookSection() {
  return (
    <SectionShell
      id="book"
      eyebrow="Book"
      title="Reserve your time"
      description="Static mock booking—keeps everything compatible with shared hosting."
    >
      <div className="grid gap-4 rounded-2xl border border-border/60 bg-card p-6 sm:grid-cols-2">
        <div>
          <div className="font-heading text-base text-foreground">
            Preferred time
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Choose a slot that fits your day.
          </div>
        </div>
        <div className="flex items-center justify-start sm:justify-end">
          <a
            href="#login"
            className={cn(buttonVariants(), "h-11 rounded-none px-7")}
          >
            Continue
          </a>
        </div>
      </div>
    </SectionShell>
  )
}

