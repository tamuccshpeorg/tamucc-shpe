import SiteNav from "../components/SiteNav";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteNav />

      <section className="px-6 py-6 md:px-10 lg:py-8">
        <div className="mx-auto max-w-5xl space-y-5">
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            <article className="flex h-[340px] flex-col justify-center rounded-lg bg-[#0067C5] p-6 text-white shadow-lg lg:h-[300px] lg:p-7">
              <h1 className="text-2xl font-bold md:text-3xl">Our Vision</h1>
              <p className="mt-4 text-base leading-7">
                A world where Hispanics are highly valued and influential
                leaders in STEM, empowered to innovate, inspire, and create
                lasting impact within their professions and communities.
              </p>
            </article>

            <div className="h-[340px] overflow-hidden rounded-lg shadow-lg lg:h-[300px]">
              <img
                src="/Pictures/About Us Section/study session.jpeg"
                alt="SHPE members at a study session"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            <div className="h-[340px] overflow-hidden rounded-lg shadow-lg lg:h-[300px]">
              <img
                src="/Pictures/About Us Section/workshop winners.jpeg"
                alt="SHPE workshop winners"
                className="h-full w-full object-cover"
              />
            </div>

            <article className="flex h-[340px] flex-col justify-center rounded-lg bg-[#0067C5] p-6 text-white shadow-lg lg:h-[300px] lg:p-7">
              <h2 className="text-2xl font-bold md:text-3xl">Our Mission</h2>
              <p className="mt-4 text-base leading-7">
                To cultivate a supportive community where students can develop
                professionally, excel academically, serve their community, and
                build meaningful connections that empower them to achieve their
                goals in STEM and beyond.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0067C5]/20 bg-[#e7f2fc] px-6 py-12 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-[#f15a24]">
            Our History
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#0067C5]" />

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-blue-950">
            Founded in 2017, SHPE TAMU-CC was established to support Hispanic
            and other underrepresented students pursuing degrees in
            engineering, computer science, mathematics, and other STEM fields.
            Since then, our chapter has fostered a welcoming community where
            students have access to professional development opportunities,
            academic resources, leadership experiences, and industry
            connections. Members become part of the SHPE familia while
            developing the skills, confidence, and relationships needed to
            succeed both in college and throughout their careers.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-950">What We Do</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              SHPE TAMU-CC provides opportunities for students to grow
              professionally, serve their community, develop leadership
              skills, and build meaningful connections that support their
              success in STEM.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {[
              {
                title: "Professional Development",
                description:
                  "Members develop career-ready skills through resume and LinkedIn workshops, internship panels, networking events, company presentations, and professional development sessions.",
                image: "/Pictures/About Us Section/workshop winners.jpeg",
                alt: "SHPE members at a professional development workshop",
              },
              {
                title: "Community Outreach",
                description:
                  "Members give back through STEM outreach events, volunteer initiatives, and service projects that inspire and support the local community.",
                image: "/Pictures/About Us Section/salvation army girl 1.jpeg",
                alt: "SHPE member participating in community outreach",
              },
              {
                title: "Fundraising",
                description:
                  "Through fundraising efforts, we support chapter activities, professional development opportunities, conference travel, and member success.",
                image: "/Pictures/About Us Section/aguas frescas pic 1.jpeg",
                alt: "SHPE members at a chapter fundraiser",
              },
              {
                title: "General Meetings",
                description:
                  "Our meetings bring members together through guest speakers, professional development activities, networking opportunities, and community building.",
                image: "/Pictures/About Us Section/meeting1.jpeg",
                alt: "SHPE members attending a general meeting",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0067C5]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="hidden">
        Society of Hispanic Professional Engineers at Texas A&amp;M
        University-Corpus Christi
      </footer>
    </main>
  );
}
