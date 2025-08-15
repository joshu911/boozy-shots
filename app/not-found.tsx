import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="font-serif text-8xl font-bold text-primary/20 mb-8">404</div>
        <h1 className="font-serif text-4xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="gradient-gold text-background">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
