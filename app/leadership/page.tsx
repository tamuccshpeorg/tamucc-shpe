import Link from "next/link";

const officers = [
  {
    name: "Lucero Robles Aguirre",
    position: "President",
    pronouns: "She/Her",
    major: "Mechanical Engineering",
    classification: "Senior",
    email: "lroblesaguirre@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/lucerorobles/",
    image: "/Pictures/Leadership/lucero-robles-aguirre.jpeg",
  },
  {
    name: "Samuel Mack",
    position: "Vice President",
    pronouns: "",
    major: "[Major]",
    classification: "[Year]",
    email: "smack2@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/samuel-mack-80b38a40b/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Andres Dwindt",
    position: "Treasurer",
    pronouns: "",
    major: "[Major]",
    classification: "[Year]",
    email: "adwindt@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/andres-dwindt-760902305/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Karina Lugardo",
    position: "Director of Fundraising",
    pronouns: "",
    major: "[Major]",
    classification: "[Year]",
    email: "klugardo@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/karinalugardo/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Joshua Gonzalez",
    position: "Director of Outreach",
    pronouns: "",
    major: "[Major]",
    classification: "[Year]",
    email: "jgonzalez212@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/joshua-gonzalez-2a3302383/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Michael Mendez",
    position: "Director of Marketing",
    pronouns: "",
    major: "[Major]",
    classification: "[Year]",
    email: "mmendez30@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/michael-m-mendez/",
    image: "/Pictures/logos/shpe_logo.png",
  },
];

export default function Leadership() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
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
          <Link className="transition hover:text-[#008c5a]" href="/resources">
            Resources
          </Link>
          <Link className="transition hover:text-[#008c5a]" href="/sponsorship">
            Sponsorship
          </Link>
        </div>
      </nav>

      <section className="min-h-[calc(100vh-113px)] overflow-hidden bg-gradient-to-br from-[#0077c8] via-[#1887d4] to-[#008c5a] px-10 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="leadership-intro max-w-4xl">
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.45em] text-white">
              Leadership
            </p>

            <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl lg:text-5xl">
              SHPE TAMUCC Officers
            </h1>

            <div className="mt-6 h-0.5 w-20 bg-white" />

            <p className="mt-6 text-lg font-semibold leading-8 text-white md:text-xl">
              At TAMUCC, the SHPE Executive Board bridges academic excellence
              with lifelong professional opportunity. Grounded in our core
              values of Familia, Service, Education, and Resilience, our
              leadership team is dedicated to cultivating an environment where
              Hispanic engineers don&apos;t just succeed but lead. Meet the
              dedicated student officers working to provide our members with the
              resources, network, and support needed to thrive.
            </p>
          </div>

          <div className="leadership-grid mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {officers.map((officer) => (
              <article
                key={`${officer.name}-${officer.position}`}
                className="officer-card rounded-[28px] border border-white/80 bg-[#f5fbff] p-4 text-blue-950 shadow-xl shadow-blue-950/18 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-[#7fffd6] hover:shadow-2xl hover:shadow-blue-950/25"
              >
                <div className="flex min-h-[560px] flex-col items-center rounded-[24px] border-4 border-[#008c5a] bg-white p-4 text-center">
                  <div className="headshot-frame mb-5 flex h-[330px] w-full max-w-[230px] items-center justify-center overflow-hidden rounded-lg border-4 border-[#d7eefb] bg-gradient-to-br from-[#e9f8ff] to-[#e7fff7] shadow-[0_18px_35px_rgba(0,119,200,0.18)] transition duration-300 ease-out">
                    <img
                      src={officer.image}
                      alt={`${officer.name} professional headshot`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-extrabold leading-tight text-blue-950">
                    {officer.name}
                  </h2>

                  <p className="mt-1 text-xl font-semibold text-[#008c5a]">
                    {officer.position}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-3">
                    <a
                      href={officer.linkedin}
                      aria-label={`${officer.name} LinkedIn`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077c8] text-lg font-black text-white shadow-md shadow-blue-400/25 transition duration-300 hover:-translate-y-1 hover:bg-[#008c5a]"
                    >
                      in
                    </a>
                    <a
                      href={`mailto:${officer.email}`}
                      aria-label={`Email ${officer.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#008c5a] text-white shadow-md shadow-green-400/25 transition duration-300 hover:-translate-y-1 hover:bg-[#0077c8]"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 fill-none stroke-current stroke-2"
                      >
                        <path d="M4 6h16v12H4z" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-5 w-full space-y-2 border-t border-[#d7eefb] pt-4 text-left text-sm leading-6 text-slate-800">
                    {officer.pronouns ? (
                      <p>
                        <span className="font-bold text-blue-950">
                          Pronouns:
                        </span>{" "}
                        {officer.pronouns}
                      </p>
                    ) : null}
                    <p>
                      <span className="font-bold text-blue-950">Major:</span>{" "}
                      {officer.major}
                    </p>
                    <p>
                      <span className="font-bold text-blue-950">
                        Classification:
                      </span>{" "}
                      {officer.classification}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .leadership-intro {
          animation: fadeSlideUp 0.75s ease-out both;
        }

        .officer-card {
          animation: fadeSlideUp 0.7s ease-out both;
        }

        .officer-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .officer-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .officer-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .officer-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        .officer-card:nth-child(5) {
          animation-delay: 0.5s;
        }

        .officer-card:nth-child(6) {
          animation-delay: 0.6s;
        }

        .officer-card:hover .headshot-frame {
          box-shadow:
            0 0 0 5px rgba(0, 140, 90, 0.14),
            0 18px 44px rgba(0, 119, 200, 0.28);
          border-color: rgba(0, 140, 90, 0.7);
        }
      `}</style>
    </main>
  );
}
