import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-6">Terms of Service</h1>
              <p className="text-muted-foreground text-lg">
                Please read these terms carefully before using our services.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    By accessing and using Boozy Shots' services, including our website and dining establishment, you
                    accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Reservations and Cancellations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reservations are subject to availability and confirmation</li>
                    <li>Cancellations must be made at least 2 hours in advance</li>
                    <li>No-shows may be subject to a cancellation fee</li>
                    <li>Large parties (10+ guests) may require a deposit</li>
                    <li>We reserve the right to modify or cancel reservations due to unforeseen circumstances</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Age Requirements</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Boozy Shots is an establishment that serves alcoholic beverages. Guests must be 18 years or older to
                    enter. Valid identification is required for all guests. We reserve the right to refuse service to
                    anyone who cannot provide proper identification.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Conduct and Dress Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>We maintain a sophisticated atmosphere and expect all guests to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Dress appropriately (smart casual or formal attire preferred)</li>
                    <li>Respect other guests and staff</li>
                    <li>Refrain from disruptive behavior</li>
                    <li>Follow all applicable laws and regulations</li>
                  </ul>
                  <p>
                    Management reserves the right to refuse service or ask guests to leave for inappropriate conduct.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Liability and Responsibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Boozy Shots is not responsible for lost, stolen, or damaged personal items. Guests are responsible
                    for their own safety and the safety of their companions. We encourage responsible consumption of
                    alcoholic beverages.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Modifications to Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Boozy Shots reserves the right to modify these terms at any time. Changes will be posted on our
                    website and take effect immediately upon posting. Continued use of our services constitutes
                    acceptance of modified terms.
                  </p>
                  <p className="mt-4 text-sm">Last updated: December 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
