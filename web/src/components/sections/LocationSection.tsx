import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { SectionShell } from "./SectionShell"

const locations = [
  { city: "Jakarta", note: "Central • South • North" },
  { city: "Bali", note: "Seminyak • Ubud" },
  { city: "Bandung", note: "Dago • Setiabudi" },
]

export function LocationSection() {
  return (
    <SectionShell
      id="location"
      eyebrow="Location"
      title="Find a spa near you"
      description="Mock locations for static hosting. You can replace these with real addresses later."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {locations.map((l) => (
          <Card key={l.city}>
            <CardHeader>
              <CardTitle>{l.city}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{l.note}</CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}

