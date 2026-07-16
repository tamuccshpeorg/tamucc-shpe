import Link from "next/link";

const resources = [
  {
    label: "Tech Affairs",
    title: "Tech Affairs & Projects",
    image: "/Pictures/About Us Section/workshop picture 2.jpeg",
    alt: "SHPE members at a hands-on workshop",
    imagePosition: "object-[50%_62%]",
    links: [
      {
        text: "Git & Web Guide",
        href: "https://docs.github.com/en/get-started",
      },
      {
        text: "Arduino Sandbox",
        href: "https://docs.arduino.cc/learn/",
      },
    ],
  },
  {
    label: "Career Growth",
    title: "Career & Job Opportunities",
    image: "/Pictures/Resources/career-fair.webp",
    alt: "SHPE national career fair booths and attendees",
    imagePosition: "object-[50%_50%]",
    links: [
      {
        text: "Handshake Portal",
        href: "https://tamucc.joinhandshake.com/",
      },
      {
        text: "TAMUCC Career Center",
        href: "https://www.tamucc.edu/institutional-advancement/career-center/index.php",
      },
    ],
  },
  {
    label: "Student Success",
    title: "Academic Excellence",
    image: "/Pictures/Resources/study-session-wide.jpeg",
    alt: "SHPE members studying together",
    imagePosition: "object-[50%_72%]",
    links: [
      {
        text: "Tutoring & Learning Services",
        href: "https://www.tamucc.edu/academics/support/tutoring-learning-services/",
      },
      {
        text: "College of Engineering",
        href: "https://www.tamucc.edu/engineering/",
      },
    ],
  },
  {
    label: "SHPE National",
    title: "SHPE National Portal",
    image: "/Pictures/Resources/shpe-national.jpeg",
    alt: "SHPE members at the national convention",
    imagePosition: "object-[50%_45%]",
    links: [
      {
        text: "SHPE Career Center",
        href: "https://shpe.org/career-services/",
      },
      {
        text: "National Convention",
        href: "https://shpe.org/events/national-convention/",
      },
    ],
  },
  {
    label: "Wellness",
    title: "Mental Health & Support",
    image: "/Pictures/Resources/campus-support.jpg",
    alt: "Texas A&M University-Corpus Christi campus building",
    imagePosition: "object-[50%_50%]",
    links: [
      {
        text: "TAMU-CC Counseling",
        href: "https://www.tamucc.edu/counseling/",
      },
      {
        text: "Student Health Services",
        href: "https://www.tamucc.edu/health-center/",
      },
    ],
  },
];

export default function Resources() {
  return (
    <main className="min-h-screen bg-[#f5fbff] text-slate-900">
      <nav className="flex items-center gap-16 border-b border-slate-200 bg-white px-12 py-6 shadow-sm">
        <img
          src="/Pictures/logos/shpe_logo.png"
          alt="SHPE TAMU-CC Logo"
          className="h-16 w-auto"
        />

        <div className="flex gap-10 text-lg font-medium text-blue-950">
          <Link className="transition hover:text-[#008c5a]" href="/">
            Home
          </Link>
          <Link className="transition hover:text-[#008c5a]" href="/about-us">
            About Us
          </Link>
          <Link className="transition hover:text-[#008c5a]" href="/leadership">
            Leadership
          </Link>
          <Link className="transition hover:text-[#008c5a]" href="/membership">
            MemberSHPE
          </Link>
          <Link className="font-bold text-[#008c5a]" href="/resources">
            Resources
          </Link>
          <Link className="transition hover:text-[#008c5a]" href="/sponsorship">
            Sponsorship
          </Link>
        </div>
      </nav>

      <section className="overflow-hidden bg-gradient-to-br from-[#0077c8] via-[#1887d4] to-[#008c5a] px-6 py-10 md:px-10">
        <div className="page-reveal mx-auto max-w-6xl">
          <p className="mb-4 text-lg font-semibold uppercase tracking-[0.45em] text-white">
            Resources
          </p>

          <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl">
            Student Resources
          </h1>

          <div className="mt-6 h-0.5 w-20 bg-white" />
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5">
          {resources.map((resource, index) => (
            <article
              key={resource.title}
              className={`w-full rounded-[22px] border border-white/80 bg-white p-3 text-blue-950 shadow-xl shadow-blue-950/10 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-[#7fffd6] hover:shadow-2xl hover:shadow-blue-950/20 md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] ${
                index % 2 === 0 ? "page-reveal-delay-1" : "page-reveal-delay-2"
              }`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[18px] border-[3px] border-[#008c5a] bg-white">
                <div className="h-44 overflow-hidden border-b-[3px] border-[#d7eefb] bg-[#e9f8ff] sm:h-48">
                  <img
                    src={resource.image}
                    alt={resource.alt}
                    className={`h-full w-full object-cover transition duration-500 hover:scale-105 ${resource.imagePosition}`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#008c5a]">
                    {resource.label}
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-950">
                    {resource.title}
                  </h2>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {resource.links.map((link) => (
                      <a
                        key={link.text}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-10 items-center justify-center rounded-xl bg-blue-950 px-3 py-2 text-center text-xs font-bold text-white shadow-md shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-[#008c5a] hover:shadow-lg hover:shadow-green-500/20"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
