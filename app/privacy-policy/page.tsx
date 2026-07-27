import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of SM Tech Media.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DA3FF]">
            SM TECH MEDIA
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#173652]">
            Privacy Policy
          </h1>

          <p className="mt-2 text-slate-500">
            Last Updated: July 2026
          </p>

          <div className="mt-10 space-y-8 text-[17px] leading-8 text-slate-700">

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Information We Collect
              </h2>

              <p>
                When you contact SM Tech Media through our website,
                WhatsApp or email, we may collect your name,
                phone number, email address and project details.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                How We Use Your Information
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>To respond to your enquiries.</li>
                <li>To provide our services.</li>
                <li>To improve our website.</li>
                <li>To communicate project updates.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Data Security
              </h2>

              <p>
                We take reasonable measures to protect your
                personal information and never sell your data
                to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-[#173652]">
                Contact Us
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