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

      <section className="min-h-[calc(100vh-113px)] bg-gradient-to-br from-orange-200 via-pink-100 to-blue-200 px-12 py-10">
        <div className="mx-auto grid h-full max-w-6xl items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.45em] text-white">
              SHPE TAMU-CC
            </p>

            <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl lg:text-5xl">
              Society of Hispanic
              <br />
              Professional Engineers
            </h1>

            <p className="mt-6 text-lg font-semibold uppercase tracking-[0.28em] text-white">
              Texas A&M University-Corpus Christi
            </p>

            <div className="mt-8 flex justify-center">
              <img
                src={horizontalImages[currentImage]}
                alt="SHPE horizontal photo"
                className="max-h-[400px] rounded-3xl object-contain shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={verticalImages[currentImage]}
                alt="SHPE vertical photo"
                className="h-[460px] w-[340px] object-cover"
              />
            </div>

            <p className="mt-6 font-serif text-4xl italic text-white">
              Welcome to the familia!
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-blue-950 p-5 text-white shadow-xl">
            <h2 className="mb-4 text-center text-3xl font-bold">
              Upcoming Events
            </h2>

            <div className="flex min-h-[640px] flex-1 items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-3">
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
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-medium text-blue-950 shadow-[0_12px_24px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_16px_30px_rgba(15,23,42,0.28)]"
              >
                {"\u2190"}
              </button>

              <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-3 py-2">
                {flyerImages.map((flyer, index) => (
                  <button
                    key={flyer}
                    type="button"
                    onClick={() => setCurrentFlyer(index)}
                    aria-label={`Show event flyer ${index + 1}`}
                    className={`h-3 w-3 rounded-full transition ${
                      currentFlyer === index
                        ? "scale-125 bg-orange-400"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNextFlyer}
                aria-label="Show next event flyer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-medium text-blue-950 shadow-[0_12px_24px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_16px_30px_rgba(15,23,42,0.28)]"
              >
                {"\u2192"}
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-950 p-5 shadow-xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-white">
              Our Pillars
            </h2>

            <div className="space-y-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-3 rounded-2xl bg-blue-400/90 p-4 text-white shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/90 p-2">
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/95">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-24">
        <h2 className="mb-8 text-4xl font-bold text-blue-950">
          Our Google Calendar
        </h2>

        <div className="overflow-hidden rounded-3xl border shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=tamucc.shpe.org%40gmail.com&ctz=America%2FChicago"
            className="h-[700px] w-full"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://calendar.google.com/calendar/u/1?cid=dGFtdWNjLnNocGUub3JnQGdtYWlsLmNvbQ"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-950 px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-xl"
          >
            Add to Google Calendar
          </a>
        </div>
      </section>

      <section className="border-y bg-white py-12">
        <h2 className="mb-8 text-center text-5xl font-extrabold text-blue-950">
          Sponsors
        </h2>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex w-max gap-10 text-3xl font-bold text-blue-950">
            {[...Array(6)].map((_, index) => (
              <span key={index}>
                {sponsorText} <span className="mx-6 text-orange-500">*</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#070832] px-8 py-9 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.15fr_0.9fr]">
            <div className="text-center lg:text-left">
              <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
              <p className="text-base leading-7">
                <span className="font-semibold">President Email:</span>
                <br />
                <a
                  href="mailto:lroblesaguirre@islander.tamucc.edu"
                  className="text-[#ff7a1a] transition hover:text-orange-300"
                >
                  lroblesaguirre@islander.tamucc.edu
                </a>
              </p>
              <p className="mt-3 text-base leading-7">
                <span className="font-semibold">Corporate Email:</span>
                <br />
                <a
                  href="mailto:tamucc.shpe.org@gmail.com"
                  className="text-[#ff7a1a] transition hover:text-orange-300"
                >
                  tamucc.shpe.org@gmail.com
                </a>
              </p>
            </div>

            <img
              src="/Pictures/logos/shpe-tamucc-footer-logo.png"
              alt="SHPE Texas A&M University-Corpus Christi logo"
              className="mx-auto w-full max-w-[520px] object-contain opacity-95"
            />

            <div className="text-center lg:text-right">
              <h3 className="text-xl font-bold leading-tight">
                Find more SHPE TAMU-CC resources at our
              </h3>
              <a
                href="https://linktr.ee/shpe_tamucc"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-2xl font-extrabold text-[#ff7a1a] transition hover:-translate-y-0.5 hover:text-orange-300"
              >
                Linktree
              </a>
            </div>
          </div>

          <div className="mt-7 h-px w-full max-w-4xl bg-blue-300/70" />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M14 8.75h2.25V5.2a15.5 15.5 0 0 0-3.28-.2C9.72 5 7.5 6.99 7.5 10.63v3.12H4v3.97h3.5V24h4.3v-6.28h3.37l.53-3.97h-3.9v-2.73c0-1.15.31-2.27 2.2-2.27Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M5.34 7.43A2.5 2.5 0 1 1 5.32 2.43a2.5 2.5 0 0 1 .02 5ZM3.19 21.5h4.28V9.13H3.19V21.5Zm6.62-12.37h4.1v1.69h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.1 2.84 5.1 6.53v6.37h-4.27v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9.81V9.13Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M7.8 2h8.4A5.82 5.82 0 0 1 22 7.8v8.4a5.82 5.82 0 0 1-5.8 5.8H7.8A5.82 5.82 0 0 1 2 16.2V7.8A5.82 5.82 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

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
