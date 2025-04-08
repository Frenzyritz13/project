export function TeachingHighlights() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Teaching Highlights</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Technical Workshops</h3>
          <ul className="space-y-2">
            <li>Web Development Fundamentals</li>
            <li>Cloud Computing with AWS</li>
            <li>Python Programming Basics</li>
            <li>Data Structures and Algorithms</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mentoring Programs</h3>
          <ul className="space-y-2">
            <li>Society of Women Engineers</li>
            <li>USC Computer Science Department</li>
            <li>Women Who Code</li>
            <li>Local Tech Community Groups</li>
          </ul>
        </div>
      </div>
    </section>
  )
}