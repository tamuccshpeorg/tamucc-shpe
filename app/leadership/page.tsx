import Link from "next/link";

const officers = [
  {
    name: "Lucero Robles",
    position: "President",
    major: "[Major]",
    classification: "[Year]",
    email: "placeholder@tamucc.edu",
  },
  {
    name: "Samuel Mack",
    position: "Vice President",
    major: "[Major]",
    classification: "[Year]",
    email: "placeholder@tamucc.edu",
  },
  {
    name: "Andres Dwindt",
    position: "Treasurer",
    major: "[Major]",
    classification: "[Year]",
    email: "placeholder@tamucc.edu",
  },
  {
    name: "Karina Lugardo",
    position: "Director of Fundraising",
    major: "[Major]",
    classification: "[Year]",
    email: "placeholder@tamucc.edu",
  },
  {
    name: "Joshua Gonzalez",
    position: "Director of Outreach",
    major: "[Major]",
    classification: "[Year]",
    email: "placeholder@tamucc.edu",
  },
  {
    name: "Michael Mendez",
    position: "Director of Marketing",
    major: "[Major]",
    classification: "[Year]",
    email: "placeholder@tamucc.edu",
  },
];

export default function Leadership() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="flex items-center gap-16 border-b bg-white px-12 py-6 shadow-sm">
        <img
          src="/Pictures/logos/shpe_logo.png"
          alt="SHPE TAMU-CC Logo"
          className="h-16 w-auto"
        />

        <div className="flex gap-10 text-lg font-medium text-blue-950">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/membership">MemberSHPE</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/sponsorship">Sponsorship</Link>
        </div>
      </nav>

      <section className="min-h-[calc(100vh-113px)] overflow-hidden bg-gradient-to-br from-orange-200 via-pink-100 to-blue-200 px-10 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="leadership-intro max-w-4xl">
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.45em] text-white">
              Leadership
            </p>

            <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl lg:text-5xl">
              SHPE TAMUCC Officers
            </h1>

            <div className="mt-6 h-0.5 w-20 bg-[#c96f4d]" />

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

          <div className="leadership-grid mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officers.map((officer) => (
              <article
                key={`${officer.name}-${officer.position}`}
                className="officer-card rounded-2xl border border-white/60 bg-white/40 p-6 text-blue-950 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(15,23,42,0.2)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="headshot-frame mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/50 p-5 shadow-[0_18px_35px_rgba(15,23,42,0.12)] transition duration-300 ease-out">
                    <img
                      // Ensure all photos have a similar background or color filter for consistency
                      src="/Pictures/logos/shpe_logo.png"
                      alt={`${officer.name} professional headshot placeholder`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-blue-950">
                    {officer.name}
                  </h2>

                  <div className="mt-5 h-px w-full bg-white/60" />

                  <div className="mt-5 w-full space-y-3 text-left text-sm leading-6 text-slate-800">
                    <p>
                      <span className="font-bold text-blue-950">
                        Position:
                      </span>{" "}
                      {officer.position}
                    </p>
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
                    <p>
                      <span className="font-bold text-blue-950">Email:</span>{" "}
                      <a
                        href={`mailto:${officer.email}`}
                        className="break-words font-semibold text-blue-700 transition hover:text-orange-500"
                      >
                        {officer.email}
                      </a>
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
            0 0 0 5px rgba(201, 111, 77, 0.18),
            0 18px 44px rgba(201, 111, 77, 0.38);
          border-color: rgba(201, 111, 77, 0.7);
        }
      `}</style>
    </main>
  );
}
