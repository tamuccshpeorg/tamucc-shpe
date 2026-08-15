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
    "We are currently seeking sponsors to support professional development, conference travel, workshops, and outreach events for Hispanic STEM students at Texas A&M University-Corpus Christi.";

  const fall2026Events = [
    {
      date: "August 26, 2026",
      time: "12:00 PM–1:00 PM",
      title: "Engineering and Computer Science Student Societies Mixer",
      detail: "A welcome mixer connecting SHPE members with peer student societies in engineering and computer science.",
    },
    {
      date: "August 26, 2026",
      time: "2:30 PM–4:30 PM",
      title: "OECS New Student Mixer",
      detail: "A networking and welcome event for new students to learn about campus opportunities and student organizations.",
    },
    {
      date: "September 9, 2026",
      time: "5:00 PM",
      title: "First General Meeting",
      detail: "Our first general meeting of the semester, featuring chapter updates, introductions, and upcoming opportunities.",
    },
    {
      date: "September 17, 2026",
      time: "5:00 PM",
      title: "How to Prepare for the National Convention",
      detail: "Collaboration with SWE to cover convention preparation, travel planning, networking strategies, and chapter expectations.",
    },
    {
      date: "September 23, 2026",
      time: "5:00 PM",
      title: "Resume Review",
      detail: "A resume-focused workshop in collaboration with engineering organizations to help members strengthen their applications.",
    },
    {
      date: "October 1, 2026",
      time: "5:00 PM",
      title: "Career Fair Prep",
      detail: "A collaboration with engineering organizations to prepare students for career fair success and employer outreach.",
    },
    {
      date: "October 21, 2026",
      time: "5:00 PM",
      title: "SHPE Convention Prep",
      detail: "A focused preparation session to help members get ready for the SHPE National Convention experience.",
    },
  ];

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

      <section className="page-reveal min-h-[calc(100vh-113px)] bg-[linear-gradient(135deg,#0b4f7b_0%,#0d73a8_48%,#17a7ab_100%)] px-12 py-10">
        <div className="mx-auto grid h-full max-w-6xl items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-center text-center">
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.45em] text-white/95">
              SHPE TAMU-CC
            </p>

            <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl lg:text-5xl">
              Society of Hispanic
              <br />
              Professional Engineers
            </h1>

            <p className="mt-6 text-lg font-semibold uppercase tracking-[0.28em] text-white/95">
              Texas A&M University-Corpus Christi
            </p>

            <div className="mt-8 flex justify-center rounded-[30px] border border-[#8ae2cf]/70 bg-white/20 p-2 shadow-[0_25px_60px_rgba(8,32,64,0.28)]">
              <img
                src={horizontalImages[currentImage]}
                alt="SHPE horizontal photo"
                className="max-h-[400px] max-w-full rounded-[24px] object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-[28px] shadow-[0_26px_70px_rgba(7,26,68,0.28)]">
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

      <section className="page-reveal-delay-1 px-10 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:gap-14">
          <div className="flex flex-col rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#eff9fd_100%)] p-6 text-[#0f2f57] shadow-[0_20px_50px_rgba(15,47,87,0.12)]">
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

          <div className="flex h-full flex-col rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#eff9fd_100%)] p-5 shadow-[0_20px_50px_rgba(15,47,87,0.12)]">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#0f2f57]">
              Our Pillars
            </h2>

            <div className="flex flex-1 flex-col gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-1 items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#e5f8f6_0%,#f1faff_100%)] p-4 text-[#0f2f57] shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-reveal-delay-2 px-10 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#0b8b70]">
                Fall 2026
              </p>
              <h2 className="text-4xl font-bold text-[#0f2f57]">
                SHPE TAMU-CC Calendar
              </h2>
            </div>

            <a
              href="https://calendar.google.com/calendar/u/1?cid=dGFtdWNjLnNocGUub3JnQGdtYWlsLmNvbQ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0067C5] px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1489d5] hover:shadow-xl"
            >
              Add to Google Calendar
            </a>
          </div>

          <div className="page-shell overflow-hidden rounded-[30px] p-4 md:p-6">
            <div className="grid gap-4">
              {fall2026Events.map((event) => (
                <article
                  key={`${event.date}-${event.time}-${event.title}`}
                  className="flex flex-col gap-3 rounded-[22px] border border-[#a8e5d8] bg-[linear-gradient(135deg,#f7fffd_0%,#f2fbff_100%)] p-5 shadow-[0_16px_30px_rgba(15,47,87,0.06)] md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex min-w-[190px] flex-col">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0b8b70]">
                      {event.date}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#0f2f57]">
                      {event.time}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0f2f57]">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {event.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#c1e7f2] bg-[linear-gradient(180deg,#f8fdff_0%,#edf8fc_100%)] py-12">
        <h2 className="mb-8 text-center text-5xl font-extrabold text-[#0f2f57]">
          Sponsors
        </h2>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex w-max gap-10 text-3xl font-bold text-[#0f2f57]">
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
