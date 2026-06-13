import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { SectionShell } from "./SectionShell"

export function LoginSection() {
  return (
    <SectionShell
      id="login"
      eyebrow="Login"
      title="Member access"
      description="Static placeholder. For shared hosting, prefer external auth (Firebase/Supabase) or simple link-out flow."
      className="bg-muted/20"
    >
      <div className="rounded-2xl border border-border/60 bg-card p-6">
        <div className="text-sm text-muted-foreground">
          This demo does not implement server auth.
        </div>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-none px-7"
            )}
          >
            Sign up
          </a>
          <a href="#" className={cn(buttonVariants(), "h-11 rounded-none px-7")}>
            Sign in
          </a>
        </div>
      </div>
    </SectionShell>
  )
}

