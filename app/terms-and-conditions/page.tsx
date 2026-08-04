export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f3f3ef] px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-semibold tracking-tight">
          Purchase Order Terms & Conditions
        </h1>

        <p className="mt-4 text-zinc-600">
          Effective Date: August 2026
        </p>

        <div className="mt-12 space-y-10 text-lg leading-8 text-zinc-700">

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              1. Acceptance
            </h2>
            <p className="mt-2">
              Acceptance of this Purchase Order constitutes acceptance of all
              terms and conditions contained herein unless otherwise agreed to
              in writing by Taylor Manufacturing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              2. Quality Requirements
            </h2>
            <p className="mt-2">
              Supplier shall maintain an effective quality management system
              appropriate for the products or services supplied. Taylor
              Manufacturing reserves the right to verify compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              3. Certificate of Conformance
            </h2>
            <p className="mt-2">
              When required by the Purchase Order, a Certificate of Conformance
              shall accompany each shipment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              4. Material Traceability
            </h2>
            <p className="mt-2">
              Material certifications and traceability shall be maintained and
              provided when required by the Purchase Order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              5. Nonconforming Product
            </h2>
            <p className="mt-2">
              Supplier shall not ship nonconforming product without prior
              written approval from Taylor Manufacturing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              6. Delivery
            </h2>
            <p className="mt-2">
              Supplier shall notify Taylor Manufacturing of any anticipated
              delays affecting delivery commitments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              7. Right of Access
            </h2>
            <p className="mt-2">
              Taylor Manufacturing, its customers, and applicable regulatory
              authorities shall have the right of access to applicable
              facilities, records, and quality documentation related to this
              Purchase Order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              8. Record Retention
            </h2>
            <p className="mt-2">
              Quality records shall be retained for a minimum of seven (7)
              years unless otherwise specified by contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              9. Flow Down
            </h2>
            <p className="mt-2">
              Supplier shall flow down all applicable requirements of this
              Purchase Order to sub-tier suppliers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">
              10. ITAR & Export Compliance
            </h2>
            <p className="mt-2">
              When applicable, supplier shall comply with all U.S. export
              control laws including the International Traffic in Arms
              Regulations (ITAR) and Export Administration Regulations (EAR).
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}