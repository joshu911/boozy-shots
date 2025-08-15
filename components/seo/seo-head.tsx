import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

export function SEOHead({
  title = "Boozy Shots - Sipping and Vibing",
  description = "Experience the perfect blend of sophisticated cocktails, exquisite cuisine, and elegant atmosphere in our premium bar and restaurant.",
  canonical,
  ogImage = "/og-image.jpg",
}: SEOHeadProps) {
  const fullTitle = title.includes("Boozy Shots") ? title : `${title} | Boozy Shots`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            name: "Boozy Shots",
            description: description,
            url: canonical || "https://boozyshots.com",
            telephone: "+1234567890",
            email: "info@boozyshots.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Elegant Street",
              addressLocality: "Downtown District",
              addressRegion: "City",
              postalCode: "12345",
              addressCountry: "US",
            },
            openingHours: ["Mo-Th 17:00-24:00", "Fr-Sa 17:00-02:00", "Su 18:00-23:00"],
            servesCuisine: ["Cocktails", "Fine Dining", "Wine"],
            priceRange: "$$$",
            image: ogImage,
          }),
        }}
      />
    </Head>
  )
}
