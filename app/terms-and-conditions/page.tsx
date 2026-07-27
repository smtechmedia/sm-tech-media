import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions of SM Tech Media.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DA3FF]">
            SM TECH MEDIA
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#173652]">
            Terms &amp; Conditions
          </h1>

          <p className="mt-2 text-slate-500">
            Last Updated: July 2026
          </p>

          <div className="mt-10 space-y-8 text-[17px] leading-8 text-slate-700">

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Acceptance of Terms
              </h2>

              <p>
                By accessing or using the SM Tech Media website and services,
                you agree to these Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Our Services
              </h2>

              <p>
                We provide website development, graphic designing, video
                editing, social media management, digital marketing,
                YouTube SEO and political campaign services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Payments
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Advance payment may be required before starting a project.</li>
                <li>Final files will be delivered after the agreed payment is completed.</li>
                <li>Project pricing depends on the agreed scope of work.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Intellectual Property
              </h2>

              <p>
                All original designs, source files and creative work remain
                the property of SM Tech Media until full payment is received,
                unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Limitation of Liability
              </h2>

              <p>
                SM Tech Media is not responsible for losses arising from
                third-party platforms, hosting providers or external services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Contact
              </h2>

              <p>
                SM Tech Media
                <br />
                📧 smtechmedia206@gmail.com
                <br />
                📞 +91 99085 40952
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}