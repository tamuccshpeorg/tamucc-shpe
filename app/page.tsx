"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const horizontalImages = [
  "/Pictures/Everything/convention group pciture.jpeg",
  "/Pictures/Everything/convention 3.jpeg",
  "/Pictures/Everything/convention 4.jpeg",
  "/Pictures/Everything/convention group.jpeg",
];

const verticalImages = [
  "/Pictures/Everything/workshop winners.jpeg",
  "/Pictures/Everything/soccer.jpeg",
  "/Pictures/Everything/big event all.jpeg",
  "/Pictures/Everything/fundraising poster.jpeg",
];

const flyerImages = [
  "/Pictures/Flyers/Blue Modern Monthly Meeting Instagram Post (1).png",
  "/Pictures/Flyers/Cream Red Minimalist Paper Travel Package Promotion Poster (3).png",
  "/Pictures/Flyers/SHPE Last Meeting.png",
];

const pillars = [
  {
    title: "Academic Development",
    text: "Supporting academic success through study resources, mentorship, and excellence in STEM.",
    icon: "/Pictures/Pillars/academics.png",
  },
  {
    title: "Chapter Development",
    text: "Building a strong familia through engagement, recruitment, retention, and chapter growth.",
    icon: "/Pictures/Pillars/chapter.png",
  },
  {
    title: "Leadership Development",
    text: "Helping members grow through officer roles, training, teamwork, and responsibility.",
    icon: "/Pictures/Pillars/leadership.jpg",
  },
  {
    title: "Professional Development",
    text: "Preparing members through workshops, networking, conferences, resumes, and industry connections.",
    icon: "/Pictures/Pillars/professional.png",
  },
  {
    title: "Service and Outreach",
    text: "Giving back through service projects, outreach events, and STEM awareness.",
    icon: "/Pictures/Pillars/service.png",
  },
];

export default function Home() {
  const sponsorText =
    "We are currently seeking sponsors to support professional development, conference travel, workshops, and outreach events for Hispanic STEM students at TAMU-CC.";

  const [currentImage, setCurrentImage] = useState(0);
  const [currentFlyer, setCurrentFlyer] = useState(0);

  const showPreviousFlyer = () => {
    setCurrentFlyer((prev) => (prev === 0 ? flyerImages.length - 1 : prev - 1));
  };

  const showNextFlyer = () => {
    setCurrentFlyer((prev) => (prev + 1) % flyerImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % horizontalImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

      <section className="min-h-[calc(100vh-113px)] bg-gradient-to-br from-[#0077c8] via-[#1887d4] to-[#008c5a] px-12 py-10">
        <div className="page-reveal mx-auto grid h-full max-w-6xl items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.45em] text-white">
              SHPE TAMU-CC
            </p>

            <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl lg:text-5xl">
              Society of <span className="text-[#d9fff4]">Hispanic</span>
              <br />
              Professional Engineers
            </h1>

            <div className="mt-6 h-0.5 w-20 bg-white" />

            <p className="mt-6 text-lg font-semibold uppercase tracking-[0.28em] text-white">
              Texas A&M University-Corpus Christi
            </p>

            <div className="mt-8 flex justify-center">
              <img
                src={horizontalImages[currentImage]}
                alt="SHPE horizontal photo"
                className="max-h-[400px] rounded-2xl border border-white/80 bg-white/70 object-contain p-2 shadow-xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-3 shadow-xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5">
              <img
                src={verticalImages[currentImage]}
                alt="SHPE vertical photo"
                className="h-[460px] w-[340px] rounded-xl object-cover"
              />
            </div>

            <p className="mt-6 font-serif text-4xl italic text-white">
              Welcome to the familia!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="page-reveal flex flex-col rounded-2xl border border-[#d7eefb] bg-white p-6 text-blue-950 shadow-xl shadow-blue-100/70 transition duration-300 hover:-translate-y-1.5">
            <h2 className="mb-3 text-center text-3xl font-bold text-blue-950">
              Upcoming Events
            </h2>
            <div className="mx-auto mb-5 h-0.5 w-20 bg-[#008c5a]" />

            <div className="flex min-h-[640px] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-[#d7eefb] bg-[#f5fbff] p-3">
              <img
                src={flyerImages[currentFlyer]}
                alt={`Upcoming event flyer ${currentFlyer + 1}`}
                className="max-h-[610px] w-full rounded-xl object-contain shadow-2xl"
              />
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={showPreviousFlyer}
                aria-label="Show previous event flyer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#008c5a] text-2xl font-medium text-white shadow-[0_12px_24px_rgba(0,140,90,0.22)] transition duration-300 hover:-translate-y-1.5 hover:bg-[#00a66a] hover:shadow-[0_18px_34px_rgba(0,140,90,0.32)]"
              >
                {"\u2190"}
              </button>

              <div className="flex items-center justify-center gap-2 rounded-full border border-[#d7eefb] bg-[#f5fbff] px-3 py-2">
                {flyerImages.map((flyer, index) => (
                  <button
                    key={flyer}
                    type="button"
                    onClick={() => setCurrentFlyer(index)}
                    aria-label={`Show event flyer ${index + 1}`}
                    className={`h-3 w-3 rounded-full transition ${
                      currentFlyer === index
                        ? "scale-125 bg-[#008c5a]"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNextFlyer}
                aria-label="Show next event flyer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#008c5a] text-2xl font-medium text-white shadow-[0_12px_24px_rgba(0,140,90,0.22)] transition duration-300 hover:-translate-y-1.5 hover:bg-[#00a66a] hover:shadow-[0_18px_34px_rgba(0,140,90,0.32)]"
              >
                {"\u2192"}
              </button>
            </div>
          </div>

          <div className="page-reveal-delay-1 rounded-2xl border border-[#d7eefb] bg-white p-6 shadow-xl shadow-blue-100/70 transition duration-300 hover:-translate-y-1.5">
            <h2 className="mb-3 text-center text-3xl font-bold text-blue-950">
              Our Pillars
            </h2>
            <div className="mx-auto mb-5 h-0.5 w-20 bg-[#008c5a]" />

            <div className="space-y-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-3 rounded-2xl border border-[#d7eefb] bg-gradient-to-br from-[#0077c8] to-[#008c5a] p-4 text-white shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-[#008c5a]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 p-2 shadow-[0_10px_24px_rgba(0,119,200,0.18)]">
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/90">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5fbff] px-10 py-24">
        <div className="page-reveal mx-auto max-w-6xl">
          <h2 className="mb-3 text-4xl font-bold text-blue-950">
            Our Google Calendar
          </h2>
          <div className="mb-8 h-0.5 w-20 bg-[#008c5a]" />

          <div className="overflow-hidden rounded-2xl border border-[#d7eefb] bg-white p-3 shadow-xl shadow-blue-100/70">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=tamucc.shpe.org%40gmail.com&ctz=America%2FChicago"
              className="h-[700px] w-full rounded-xl"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="https://calendar.google.com/calendar/u/1?cid=dGFtdWNjLnNocGUub3JnQGdtYWlsLmNvbQ"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#008c5a] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1.5 hover:bg-[#00a66a] hover:shadow-xl"
            >
              Add to Google Calendar
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7eefb] bg-white py-12">
        <h2 className="page-reveal mb-3 text-center text-5xl font-extrabold text-blue-950">
          Sponsors
        </h2>
        <div className="mx-auto mb-8 h-0.5 w-20 bg-[#008c5a]" />

        <div className="page-reveal-delay-1 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex w-max gap-10 text-3xl font-bold text-blue-950">
            {[...Array(6)].map((_, index) => (
              <span key={index}>
                {sponsorText} <span className="mx-6 text-[#008c5a]">*</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  );
}
