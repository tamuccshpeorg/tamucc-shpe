import SiteNav from "../components/SiteNav";

const nationalMembershipUrl = "https://shpe.org/membership/become-a-member/";

const committeeCards = [
  {
    title: "Fundraising Committee",
    image: "/MemberSHPE/Fundraising Comitee.jpeg",
    text: "Help plan fundraisers, organize sales, brainstorm creative ideas, and support events that help our chapter raise money for meetings, workshops, and future opportunities.",
  },
  {
    title: "Outreach Committee",
    image: "/MemberSHPE/salvation army group.jpeg",
    text: "Help with community service, STEM outreach, school visits, tabling events, and activities that allow SHPE TAMU-CC to give back to the community.",
  },
];

const allPointWays = [
  ["3/hr", "Volunteer at a fundraiser or SHPE event"],
  ["2/hr", "Volunteer at outreach or community service"],
  ["3", "Attend a professional workshop"],
  ["2", "Attend a general meeting"],
  ["2", "Academic workshop or study night"],
  ["1", "Social event"],
  ["4", "Elections/voting"],
  ["1", "Wear SHPE shirt/merch to a general meeting or event"],
  ["1/event", "Submit usable event pictures/videos"],
];

export default function Membership() {
  return (
    <main className="min-h-screen bg-[#fbf5ec] text-slate-900">
      <SiteNav />

      <section className="page-reveal relative flex min-h-[calc(100vh-105px)] items-center overflow-hidden bg-[linear-gradient(180deg,#f4fbff_0%,#edf8fc_100%)] px-6 py-16 md:px-10 lg:py-20">
        <div className="pointer-events-none absolute left-10 top-12 h-28 w-28 rounded-full border border-[#b9e6f1]" />
        <div className="pointer-events-none absolute bottom-10 right-12 grid grid-cols-4 gap-3 opacity-35">
          {[...Array(16)].map((_, index) => (
            <span key={index} className="h-2 w-2 rounded-full bg-[#7cc5d7]" />
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(135deg,transparent_35%,rgba(124,197,215,0.22)_35%,rgba(124,197,215,0.22)_48%,transparent_48%)]" />

        <div className="page-shell relative mx-auto grid w-full max-w-7xl items-center gap-14 rounded-[32px] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:p-10">
          <article>
            <h1 className="font-serif text-5xl font-extrabold leading-none text-[#071a44] md:text-6xl lg:text-7xl">
              Bienvenidos
              <br />
              <span className="mt-4 block font-sans text-3xl font-medium text-[#071a44] md:text-4xl lg:text-5xl">
                to the familia!
              </span>
            </h1>
            <span className="mt-7 block h-1.5 w-24 rounded-full bg-[#f26b2c]" />
            <p className="mt-9 max-w-2xl text-lg leading-8 text-[#071a44]/85 md:text-xl md:leading-9">
              SHPE TAMU-CC is a community for students who want to grow
              academically, professionally, and socially. Whether you are
              Hispanic, an engineer, or simply interested in STEM, you are
              welcome to join and take advantage of opportunities at both the
              local and national levels.
            </p>
            <div className="mt-10 border-l-4 border-[#0067C5] pl-5">
              <p className="font-serif text-xl italic leading-8 text-[#071a44] md:text-2xl">
                Keep scrolling to learn more about MemberSHPE.
              </p>
            </div>

          </article>

          <div className="overflow-hidden rounded-[28px] shadow-[0_26px_70px_rgba(7,26,68,0.2)]">
            <img
              src="/MemberSHPE/big event group.jpeg"
              alt="SHPE TAMU-CC members at a meeting"
              className="h-[360px] w-full object-cover md:h-[520px] lg:h-[590px]"
            />
          </div>
        </div>
      </section>

      <section id="join-committee" className="page-reveal-delay-1 bg-white px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0f2f57] md:text-4xl">
              Join a Committee
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              Committees are a great way to get involved, meet other members,
              and help SHPE grow without needing an officer position.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {committeeCards.map((committee) => (
              <article
                key={committee.title}
                className="overflow-hidden rounded-[22px] bg-[#fbf5ec] shadow-[0_18px_36px_rgba(15,47,87,0.08)]"
              >
                <img
                  src={committee.image}
                  alt={`${committee.title} members`}
                  className="h-72 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold text-[#0f2f57]">
                    {committee.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    {committee.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E07523]/25 bg-[#fbf5ec] p-6 text-center shadow-md">
            <h3 className="text-2xl font-extrabold text-blue-950">
              Join the SHPE GroupMe
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              Keep posted on the committee group chats for fundraising,
              outreach, service opportunities, meeting updates, and ways to get
              involved.
            </p>
          </div>
        </div>
      </section>

      <section className="page-reveal-delay-2 flex min-h-[calc(100vh-90px)] items-center bg-white px-6 py-10 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 border border-slate-100 bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <article className="flex flex-col justify-center">
            <h2 className="font-serif text-5xl font-black leading-none text-[#0f2f57] md:text-6xl">
              The Point System
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-1 w-20 rounded-full bg-[#E07523]" />
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <h3 className="mt-9 text-2xl font-black text-[#0f2f57]">
              Ways to Earn Points
            </h3>
            <div className="mt-5">
              {allPointWays.map(([points, activity]) => (
                <div
                  key={activity}
                  className="grid grid-cols-[105px_1fr] items-center border-b border-slate-200 py-3 last:border-b-0"
                >
                  <span className="text-xl font-black text-[#0f2f57]">
                    +{points}
                  </span>
                  <p className="text-base leading-6 text-slate-700 md:text-lg">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-slate-300 pt-4 text-base italic text-slate-600">
              The most active members will receive support for SHPE National Convention.
            </p>
          </article>

          <div className="grid content-center gap-5">
            <div className="overflow-hidden rounded-[22px] shadow-xl">
              <img
                src="/MemberSHPE/shpe image 2.jpeg"
                alt="SHPE TAMU-CC members"
                className="h-[300px] w-full object-cover md:h-[350px] lg:h-[360px]"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[18px] shadow-xl">
                <img
                  src="/MemberSHPE/salvation army girl 2.jpeg"
                  alt="SHPE TAMU-CC member volunteering"
                  className="h-[260px] w-full object-cover md:h-[290px] lg:h-[300px]"
                />
              </div>
              <div className="overflow-hidden rounded-[18px] shadow-xl">
                <img
                  src="/MemberSHPE/Academic Workshop.jpeg"
                  alt="SHPE TAMU-CC academic workshop"
                  className="h-[260px] w-full object-cover md:h-[290px] lg:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-reveal-delay-1 bg-white px-3 py-16 md:px-6">
        <div className="relative mx-auto min-h-[760px] max-w-[96rem] overflow-hidden rounded-sm shadow-2xl">
          <img
            src="/MemberSHPE/SHPE National.jpeg"
            alt="SHPE National Convention members"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative flex min-h-[760px] items-center px-6 py-10 md:px-16">
            <article className="max-w-3xl rounded-[28px] bg-white/90 p-8 text-[#0f2f57] shadow-2xl md:p-12">
              <h2 className="font-serif text-5xl font-extrabold leading-tight md:text-6xl">
                National Membership
              </h2>
              <span className="mt-6 block h-1.5 w-24 rounded-full bg-[#E07523]" />

              <p className="mt-8 text-2xl font-extrabold text-[#E07523]">
                Undergraduate Membership ($10/year)
              </p>
              <p className="mt-5 text-xl leading-9">
                National membership connects you to SHPE&apos;s resources,
                scholarships, conferences, and career opportunities.
              </p>
              <p className="mt-7 text-xl leading-9">
                To join through SHPE National, use the button below.
              </p>

              <div className="mt-8 text-xl leading-9">
                <p className="font-bold">Chapter details:</p>
                <ul className="mt-3 list-disc space-y-2 pl-7 italic">
                  <li>Region: 5</li>
                  <li>
                    Chapter Affiliation: Texas A&amp;M University-Corpus
                    Christi
                  </li>
                </ul>
              </div>

              <a
                href={nationalMembershipUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex rounded bg-[#0067C5] px-12 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1489d5]"
              >
                National MemberSHPE
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
