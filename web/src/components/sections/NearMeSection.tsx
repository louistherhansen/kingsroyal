import { SectionShell } from "./SectionShell"

export function NearMeSection() {
  return (
    <SectionShell
      id="near-me"
      eyebrow="Near Me"
      title="Nearby availability"
      description="Static mock section for now. Later, this can be powered by a map embed or external API—client-side only."
      className="bg-muted/30"
    >
      <div className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground">
        Coming soon: location suggestions based on your city.
      </div>
    </SectionShell>
  )
}

