"use client";

import { useEffect, useState } from "react";
import SiteNav from "./components/SiteNav";

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
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteNav />

      <section className="min-h-[calc(100vh-113px)] bg-[#E07523] px-12 py-10">
        <div className="mx-auto grid h-full max-w-6xl items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-center text-center">
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
                className="max-h-[400px] max-w-full rounded-3xl object-contain"
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

            <p className="mt-10 font-serif text-4xl italic text-white">
              Welcome to the familia!
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:gap-14">
          <div className="flex flex-col rounded-3xl bg-blue-950 p-6 text-white shadow-xl">
            <h2 className="mb-5 text-center text-3xl font-bold">
              Upcoming Events
            </h2>

            <div className="relative flex min-h-[640px] flex-1 items-center justify-center">
              <img
                src={flyerImages[currentFlyer]}
                alt={`Upcoming event flyer ${currentFlyer + 1}`}
                className="max-h-[610px] w-full rounded-2xl object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={showPreviousFlyer}
                aria-label="Show previous event flyer"
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-4xl font-semibold leading-none text-blue-950 shadow-[0_10px_22px_rgba(15,23,42,0.24)] transition hover:-translate-y-[52%] hover:bg-slate-50 hover:shadow-[0_14px_28px_rgba(15,23,42,0.3)]"
              >
                {"\u2039"}
              </button>

              <button
                type="button"
                onClick={showNextFlyer}
                aria-label="Show next event flyer"
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-4xl font-semibold leading-none text-blue-950 shadow-[0_10px_22px_rgba(15,23,42,0.24)] transition hover:-translate-y-[52%] hover:bg-slate-50 hover:shadow-[0_14px_28px_rgba(15,23,42,0.3)]"
              >
                {"\u203A"}
              </button>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-3xl bg-blue-950 p-5 shadow-xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-white">
              Our Pillars
            </h2>

            <div className="flex flex-1 flex-col gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-1 items-center gap-3 rounded-2xl bg-blue-400/90 p-4 text-white shadow-md"
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
