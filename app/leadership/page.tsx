"use client";

import { useState } from "react";
import SiteNav from "../components/SiteNav";

const officers = [
  {
    name: "Lucero Robles Aguirre",
    position: "Co-President",
    pronouns: "She/Her",
    major: "Mechanical Engineering",
    classification: "Senior",
    email: "lroblesaguirre@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/lucerorobles/",
    image: "/images/lucero.jpeg",
  },
  {
    name: "Joshua Gonzalez",
    position: "Co-President",
    pronouns: "He/Him",
    major: "Mechanical Engineering",
    classification: "Senior",
    email: "jgonzalez212@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/joshua-gonzalez-2a3302383/",
    image: "/images/Josh.jpeg",
  },
  {
    name: "Samuel Allen Mack",
    position: "Vice President",
    pronouns: "He/Him/His",
    major: "Mechanical Engineering",
    classification: "Senior",
    email: "smack2@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/samuel-mack-80b38a40b/",
    image: "/images/sam.jpeg",
  },
  {
    name: "Andres Dwindt",
    position: "Treasurer",
    pronouns: "He/Him",
    major: "Mechanical Engineering",
    classification: "Senior",
    email: "adwindt@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/andres-dwindt-760902305/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Karina Lugardo Sanchez",
    position: "Fundraising Coordinator",
    pronouns: "She/Her",
    major: "Mechanical Engineering",
    classification: "Junior",
    email: "klugardo@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/karinalugardo/",
    image: "/images/katrina.jpeg",
  },
  {
    name: "Michael Mario Mendez",
    position: "Director of Marketing",
    pronouns: "He/Him",
    major: "Computer Science",
    classification: "",
    email: "mmendez30@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/michael-m-mendez/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Boris Hernandez",
    position: "",
    pronouns: "He/Him/His",
    major: "Computer Science",
    classification: "Senior",
    email: "",
    linkedin: "",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Emilio Cavazos",
    position: "Secretary",
    pronouns: "He/Him",
    major: "Electrical Engineering",
    classification: "Sophomore",
    email: "ecavazos14@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/emiliano-s-cavazos",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Christian Tercero",
    position: "Technology Director",
    pronouns: "He/Him",
    major: "Electrical Engineering",
    classification: "Sophomore",
    email: "ctercero@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/christian-m-tercero",
    image: "/images/chris.jpeg",
  },
  {
    name: "Jacqueline Almendarez",
    position: "",
    pronouns: "She/Her",
    major: "Mechanical Engineering, Mathematics",
    classification: "Junior",
    email: "jalmendarez2@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/jac-alm",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Alessa De La Garza",
    position: "Outreach Coordinator",
    pronouns: "She/Her",
    major: "Mechanical Engineering",
    classification: "Sophomore",
    email: "adelagarza32@islander.tamucc.edu",
    linkedin: "https://www.linkedin.com/in/alessa-de-la-garza-30a2ba383",
    image: "/images/alessa.jpeg",
  },
  {
    name: "Ezekiel Russell",
    position: "Marketing Coordinator",
    pronouns: "He/Him",
    major: "Mechanical Engineering",
    classification: "Sophomore",
    email: "erussell3@islander.tamucc.edu",
    linkedin: " https://www.linkedin.com/in/ezekiel-russell-354085447/",
    image: "/Pictures/logos/shpe_logo.png",
  },
  {
    name: "Brianna Stewart",
    position: "",
    pronouns: "She/Her",
    major: "",
    classification: "",
    email: "",
    linkedin: " ",
    image: "/Pictures/logos/shpe_logo.png",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function Leadership() {
  const [flipped, setFlipped] = useState<string[]>(
  officers
    .filter((o) => o.image && !o.image.includes("shpe_logo"))
    .map((o) => `${o.name}-${o.position}`),
);

  const toggleCard = (key: string) =>
    setFlipped((current) =>
      current.includes(key)
        ? current.filter((k) => k !== key)
        : [...current, key],
    );
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteNav />

      <section className="min-h-[calc(100vh-113px)] overflow-hidden bg-gradient-to-br from-[#0067c5] via-[#1d7fd0] to-[#001f5b] px-5 py-7 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="leadership-intro max-w-4xl">
            <p className="mb-3 text-base font-semibold uppercase tracking-[0.45em] text-white">
              Leadership
            </p>

            <h1 className="font-serif text-3xl font-bold uppercase leading-[1.05] text-white md:text-4xl lg:text-[2.65rem]">
              SHPE TAMU-CC Officers
            </h1>

            <div className="mt-4 h-0.5 w-16 bg-[#76e3d0]" />

            <p className="mt-4 max-w-5xl text-sm font-semibold leading-6 text-white md:text-base">
              At TAMU-CC, the SHPE Executive Board bridges academic excellence
              with lifelong professional opportunity. Grounded in our core
              values of Familia, Service, Education, and Resilience, our
              leadership team is dedicated to cultivating an environment where
              Hispanic engineers don&apos;t just succeed but lead. Meet the
              dedicated student officers working to provide our members with the
              resources, network, and support needed to thrive.
            </p>
          </div>

          <div className="leadership-grid mt-7 flex flex-wrap justify-center gap-5">
            {officers.map((officer) => {
              const key = `${officer.name}-${officer.position}`;
const imageSrc = officer.image || "/Pictures/logos/shpe_logo.png";
const isLogo = imageSrc.includes("shpe_logo");
const canFlip = !isLogo;
const isFlipped = canFlip && flipped.includes(key);

              return (
                <article
  key={key}
  tabIndex={canFlip ? 0 : undefined}
  onClick={(e) => {
    if (!canFlip) return;
    if ((e.target as HTMLElement).closest("a")) return;
    toggleCard(key);
  }}
  onKeyDown={(e) => {
    if (!canFlip) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCard(key);
    }
  }}
                  className={`officer-card w-full rounded-[22px] border border-white/80 bg-[#f5fbff] p-3 text-[#0f2f57] shadow-[0_18px_40px_rgba(0,103,197,0.08)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#f26b2c]/80 hover:shadow-2xl hover:shadow-blue-950/12 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)] 
                    ${isFlipped ? "flipped" : ""} ${canFlip ? "" : "no-flip"}`}
                >
                  <div className="flip-scene">
                    <div className="flip-inner">
                      {/* FRONT */}
                      <div className="flex min-h-[355px] flex-col items-center rounded-[18px] border-[3px] border-[#0067c5] bg-white p-4 text-center">
                        <div className="headshot-frame mb-4 flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-[#f26b2c]/30 bg-white shadow-[0_14px_28px_rgba(0,31,91,0.16)] transition duration-300 ease-out">
                          <span className="text-4xl font-black tracking-wide text-[#f26b2c]">
                            {getInitials(officer.name)}
                          </span>
                        </div>

                        <h2 className="text-xl font-extrabold leading-tight text-[#0f2f57] xl:text-[1.35rem]">
                          {officer.name}
                        </h2>

                        <p className="mt-1 text-base font-semibold leading-tight text-[#0067c5]">
                          {officer.position}
                        </p>

                        <div className="mt-4 flex items-center justify-center gap-3">
                          <a
                            href={officer.linkedin}
                            aria-label={`${officer.name} LinkedIn`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0067c5] text-base font-black text-white shadow-md shadow-blue-400/25 transition duration-300 hover:-translate-y-1 hover:bg-[#f26b2c]"
                          >
                            in
                          </a>
                          <a
                            href={`mailto:${officer.email}`}
                            aria-label={`Email ${officer.name}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#001f5b] text-white shadow-md shadow-blue-950/25 transition duration-300 hover:-translate-y-1 hover:bg-[#f26b2c]"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-5 w-5 fill-none stroke-current stroke-2"
                            >
                              <path d="M4 6h16v12H4z" />
                              <path d="m4 7 8 6 8-6" />
                            </svg>
                          </a>
                        </div>

                        <div className="mt-4 w-full space-y-1 border-t border-[#d7eefb] pt-4 text-left text-sm leading-5 text-slate-800">
                          {officer.pronouns ? (
                            <p>
                              <span className="font-bold text-[#0f2f57]">
                                Pronouns:
                              </span>{" "}
                              {officer.pronouns}
                            </p>
                          ) : null}
                          <p>
                            <span className="font-bold text-[#0f2f57]">
                              Major:
                            </span>{" "}
                            {officer.major}
                          </p>
                          {officer.classification ? (
                            <p>
                              <span className="font-bold text-[#0f2f57]">
                                Classification:
                              </span>{" "}
                              {officer.classification}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      {/* BACK */}
                      <div className="flip-back flex min-h-[355px] flex-col overflow-hidden rounded-[18px] border-[3px] border-[#0067c5] bg-white">
                        <div
                          className={`relative min-h-[250px] flex-1 ${
                            isLogo ? "bg-[#f5fbff]" : ""
                          }`}
                        >
                          <img
                            src={imageSrc}
                            alt={officer.name}
                            className={
                              isLogo
                                ? "absolute inset-0 m-auto h-32 w-32 object-contain"
                                : "absolute inset-0 h-full w-full object-cover"
                            }
                          />
                        </div>
                        <div className="border-t-[3px] border-[#d7eefb] bg-white px-4 py-3 text-center">
                          <p className="text-lg font-extrabold leading-tight text-[#0f2f57]">
                            {officer.name}
                          </p>
                          <p className="text-sm font-semibold text-[#0067c5]">
                            {officer.position}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            Click to view details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
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

        .officer-card:nth-child(n + 7) {
          animation-delay: 0.7s;
        }

        .officer-card:hover .headshot-frame {
          box-shadow:
            0 0 0 5px rgba(0, 140, 90, 0.14),
            0 18px 44px rgba(0, 119, 200, 0.28);
          border-color: rgba(0, 140, 90, 0.7);
        }

        .flip-scene {
  perspective: 1100px;
  cursor: pointer;
}

.flip-inner {
  display: grid;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-inner > * {
  grid-area: 1 / 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-back {
  transform: rotateY(180deg);
}

.officer-card.flipped .flip-inner {
  transform: rotateY(180deg);
}

.officer-card:focus-visible {
  outline: 3px solid #76e3d0;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .flip-inner {
    transition: none;
  }
      }

      .officer-card.no-flip .flip-scene {
  cursor: default;
}
      `}</style>
    </main>
  );
}
