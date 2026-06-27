import SiteNav from "../components/SiteNav";

const sponsorBenefits = [
  {
    title: "Website Recognition",
    description:
      "Have your company logo featured on the SHPE TAMU-CC website, showcasing your support to students, alumni, and visitors.",
  },
  {
    title: "Social Media Recognition",
    description:
      "Increase your brand visibility through acknowledgments across our chapter's social media platforms.",
  },
  {
    title: "Career Opportunities",
    description:
      "Share internship, co-op, and full-time opportunities directly with motivated engineering and STEM students.",
  },
  {
    title: "Chapter Apparel Recognition",
    description:
      "Your company logo can be displayed on official SHPE TAMU-CC chapter apparel, providing year-round visibility.",
  },
  {
    title: "Company Presentation",
    description:
      "Present your organization during one of our general meetings to introduce students to your company and career opportunities.",
  },
  {
    title: "Workshop or Networking Event",
    description:
      "Host a technical workshop, networking session, or professional development event to engage directly with our members.",
  },
];

export default function Sponsorship() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteNav />

      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-6 py-20 text-center text-white md:min-h-[420px]">
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <div className="h-full w-[28vw] max-w-[480px] overflow-hidden">
            <img
              src="/Sponsorship/convention group pciture cropped.jpeg"
              alt=""
              className="h-full w-[56vw] max-w-[960px] -translate-x-1/2 object-cover object-right"
            />
          </div>
          <img
            src="/Sponsorship/convention group pciture cropped.jpeg"
            alt="SHPE TAMU-CC members at convention"
            className="h-full w-[56vw] max-w-[960px] object-cover"
          />
          <div className="h-full w-[28vw] max-w-[480px] overflow-hidden">
            <img
              src="/Sponsorship/convention group pciture cropped.jpeg"
              alt=""
              className="h-full w-[56vw] max-w-[960px] object-cover object-left"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-950/75" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Become A Sponsor!
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto max-w-3xl text-2xl font-extrabold text-blue-950 md:text-3xl">
            Become a Sponsor for SHPE TAMU-CC
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#E07523]" />
          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
            By partnering with SHPE Texas A&amp;M University-Corpus Christi,
            your organization invests in the professional growth of talented
            Hispanic STEM students. Your sponsorship supports career
            development, leadership opportunities, networking events, and
            chapter initiatives while connecting your company with the next
            generation of engineers and innovators.
          </p>
        </div>
      </section>

      <section className="bg-[#e7f2fc] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
              Sponsorship Benefits
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
              Partnering with our chapter gives your organization meaningful
              visibility while helping students prepare for successful STEM
              careers.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sponsorBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-lg border border-[#0067C5]/15 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-blue-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-xl md:p-8">
          <h2 className="text-2xl font-extrabold text-[#a55a2c] md:text-3xl">
            Ready to Partner With SHPE TAMU-CC?
          </h2>
          <div className="mx-auto mt-4 h-px max-w-2xl bg-slate-300" />
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-800 md:text-base">
            Interested in recruiting talented students, building your brand on
            campus, or supporting the next generation of engineers? Explore our
            sponsorship opportunities to learn how your organization can make a
            lasting impact on our chapter and the students we serve.
          </p>
          <a
            href="/Sponsorship/SHPE SPONSORSHIP PACKET (2).pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#E07523] px-6 py-2.5 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c95f18] hover:shadow-xl md:text-base"
          >
            View Sponsorship Packet (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
