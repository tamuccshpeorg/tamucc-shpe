export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  description: string;
  location?: string;
};

export const calendarEvents: CalendarEvent[] = [
  {
    id: "fall-2026-engineering-computer-science-societies-mixer",
    title: "Engineering and Computer Science Student Societies Mixer",
    start: "2026-08-26T12:00:00-05:00",
    end: "2026-08-26T13:00:00-05:00",
    description:
      "A welcome mixer connecting SHPE members with peer student societies in engineering and computer science.",
    location: "Texas A&M University-Corpus Christi",
  },
  {
    id: "fall-2026-oecs-new-student-mixer",
    title: "OECS New Student Mixer",
    start: "2026-08-26T14:30:00-05:00",
    end: "2026-08-26T16:30:00-05:00",
    description:
      "A networking and welcome event for new students to learn about campus opportunities and student organizations.",
    location: "Texas A&M University-Corpus Christi",
  },
  {
    id: "fall-2026-first-general-meeting",
    title: "First General Meeting",
    start: "2026-09-09T17:00:00-05:00",
    end: "2026-09-09T18:00:00-05:00",
    description:
      "Our first general meeting of the semester, featuring chapter updates, introductions, and upcoming opportunities.",
    location: "Texas A&M University-Corpus Christi",
  },
  {
    id: "fall-2026-national-convention-prep-swe",
    title: "How to Prepare for the National Convention",
    start: "2026-09-17T17:00:00-05:00",
    end: "2026-09-17T18:00:00-05:00",
    description:
      "Collaboration with SWE to cover convention preparation, travel planning, networking strategies, and chapter expectations.",
    location: "Texas A&M University-Corpus Christi",
  },
  {
    id: "fall-2026-resume-review",
    title: "Resume Review",
    start: "2026-09-23T17:00:00-05:00",
    end: "2026-09-23T18:00:00-05:00",
    description:
      "A resume-focused workshop in collaboration with engineering organizations to help members strengthen their applications.",
    location: "Texas A&M University-Corpus Christi",
  },
  {
    id: "fall-2026-career-fair-prep",
    title: "Career Fair Prep",
    start: "2026-10-01T17:00:00-05:00",
    end: "2026-10-01T18:00:00-05:00",
    description:
      "A collaboration with engineering organizations to prepare students for career fair success and employer outreach.",
    location: "Texas A&M University-Corpus Christi",
  },
  {
    id: "fall-2026-convention-prep",
    title: "SHPE Convention Prep",
    start: "2026-10-21T17:00:00-05:00",
    end: "2026-10-21T18:00:00-05:00",
    description:
      "A focused preparation session to help members get ready for the SHPE National Convention experience.",
    location: "Texas A&M University-Corpus Christi",
  },
];

export const calendarFeedUrl = "https://www.tamuccshpe.org/api/calendar";

export const outlookSubscribeUrl = `https://outlook.office.com/calendar/0/addfromweb?url=${encodeURIComponent(calendarFeedUrl)}`;

export function getOutlookCalendarUrl(event: CalendarEvent) {
  const start = new Date(event.start);
  const end = new Date(event.end);

  const params = new URLSearchParams({
    subject: event.title,
    startdt: start.toISOString(),
    enddt: end.toISOString(),
    body: event.description,
  });

  if (event.location) {
    params.set("location", event.location);
  }

  return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function getCalendarEventUid(event: CalendarEvent) {
  return `${event.id}@shpetamucc.org`;
}
