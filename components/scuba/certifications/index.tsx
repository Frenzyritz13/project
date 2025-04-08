import { CertificationCard } from "./certification-card"
import { scubaData } from "@/config/scuba"

export function Certifications() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {scubaData.certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </section>
  )
}