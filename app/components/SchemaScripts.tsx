'use client'

import Script from 'next/script'
import therapistSchema from '@/public/schema/therapist.json'
import personSchema from '@/public/schema/person.json'
import faqSchema from '@/public/schema/faq.json'

export default function SchemaScripts() {
  return (
    <>
      {/* LocalBusiness schema for therapist practice */}
      <Script
        id="therapist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(therapistSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Person schema for therapist credentials */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
        strategy="afterInteractive"
      />

      {/* FAQ schema for featured snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  )
}
