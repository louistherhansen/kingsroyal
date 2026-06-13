import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { SectionShell } from "./SectionShell"

const steps = [
  {
    title: "Choose your ritual",
    body: "Explore signature treatments designed to restore calm and comfort.",
  },
  {
    title: "Pick time & therapist",
    body: "Select your preferred schedule—tailored to your pace.",
  },
  {
    title: "Arrive & unwind",
    body: "A quiet welcome and warm ambience, from start to finish.",
  },
]

export function OrderSection() {
  return (
    <SectionShell
      id="order"
      eyebrow="Order"
      title="A smooth booking experience"
      description="Static-ready flow—simple, elegant, and made to feel effortless."
      className="bg-muted/30"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{s.body}</CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}

