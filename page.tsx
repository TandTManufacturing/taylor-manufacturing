export default function CapabilitiesPage() {
  const sections = [
    {
      title: "Engineering Support",
      items: ["CAD Design", "Assembly Modeling", "DFMA", "FEA Analysis", "Test Apparatus Development"],
    },
    {
      title: "Precision Manufacturing",
      items: ["Multi-axis Machining", "Turning", "Prototype Manufacturing", "Production Manufacturing", "Fixture Development"],
    },
    {
      title: "Quality & Inspection",
      items: ["In-Process Inspection", "Final Inspection", "Inspection Documentation", "Traceability Support", "Quality-Focused Workflow"],
    },
    {
      title: "Post Processing",
      items: ["Ultrasonic Cleaning", "Mechanical Tumbling", "Media Blasting", "Anodizing", "Black Oxide", "Heat Treatment"],
    },
    {
      title: "Industries Served",
      items: ["Aerospace & Defense", "Motorsports", "Industrial Equipment", "Automation", "Prototype Development"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f3f3ef] text-zinc-900">
      <section className="px-8 py-24 lg:px-20">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Taylor Manufacturing</p>
        <h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-tight">
          Capabilities
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-700">
          Engineering-driven manufacturing support for aerospace, defense,
          motorsports, industrial, and prototype applications.
        </p>
      </section>

      <section className="border-t border-zinc-300">
        {sections.map((section) => (
          <div key={section.title} className="grid border-b border-zinc-300 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#ecece7] px-8 py-16 lg:px-20">
              <h2 className="text-4xl font-semibold tracking-tight">{section.title}</h2>
            </div>

            <div className="px-8 py-16 lg:px-20">
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item} className="border-b border-zinc-300 pb-4 text-xl text-zinc-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="px-8 py-24 lg:px-20">
        <h2 className="text-5xl font-semibold tracking-tight">
          Have a project ready for review?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
          Send a PDF print, STEP model, quantity, material, finish requirements,
          and delivery target.
        </p>
        <a
          href="mailto:quotes@taylormanufacturingus.com"
          className="mt-10 inline-flex rounded-2xl bg-zinc-950 px-8 py-4 font-semibold text-white"
        >
          Email RFQ
        </a>
      </section>
    </main>
  );
}