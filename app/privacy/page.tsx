import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground text-lg">
                Your privacy is important to us. This policy explains how we collect and use your information.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We collect information you provide directly to us, such as when you make a reservation, contact us,
                    or sign up for our newsletter. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information</li>
                    <li>Reservation details and preferences</li>
                    <li>Communication preferences</li>
                    <li>Feedback and reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process and manage your reservations</li>
                    <li>Communicate with you about your visits</li>
                    <li>Send you updates about events and special offers</li>
                    <li>Improve our services and customer experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except as described in this policy. We may share information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners for joint promotions (with your consent)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We use cookies and similar technologies to enhance your experience on our website. These help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Provide personalized content</li>
                    <li>Improve website functionality</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </CardContent>
              </Card>

              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                    <br />
                    Email: privacy@boozyshots.com
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Address: 123 Elegant Street, Downtown District, City 12345
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
