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

      <section className="flex min-h-[calc(100vh-140px)] items-center bg-[#d7edf6] px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <article>
            <h1 className="font-serif text-5xl font-extrabold leading-tight text-blue-950 md:text-6xl lg:text-7xl">
              Bienvenidos
              <br />
              <span className="font-sans text-4xl font-medium text-slate-950 md:text-5xl lg:text-6xl">
                to the familia!
              </span>
            </h1>
            <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-800 md:text-2xl md:leading-10">
              SHPE TAMU-CC is a community for students who want to grow
              academically, professionally, and socially. Whether you are
              Hispanic, an engineer, or simply interested in STEM, you are
              welcome to join and take advantage of opportunities at the
              local and national levels.
            </p>
            <p className="mt-10 font-serif text-2xl italic leading-9 text-blue-950 md:text-3xl">
              Keep scrolling to learn more about MemberSHPE.
            </p>

          </article>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/MemberSHPE/big event group.jpeg"
              alt="SHPE TAMU-CC members at a meeting"
              className="h-[360px] w-full object-cover md:h-[520px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section id="join-committee" className="bg-white px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
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
                className="overflow-hidden rounded-2xl bg-[#fbf5ec] shadow-xl"
              >
                <img
                  src={committee.image}
                  alt={`${committee.title} members`}
                  className="h-72 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold text-blue-950">
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

      <section className="flex min-h-[calc(100vh-90px)] items-center bg-white px-6 py-10 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 border border-slate-100 bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <article className="flex flex-col justify-center">
            <h2 className="font-serif text-5xl font-black leading-none text-blue-950 md:text-6xl">
              The Point System
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-1 w-20 rounded-full bg-[#E07523]" />
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <h3 className="mt-9 text-2xl font-black text-blue-950">
              Ways to earn points
            </h3>
            <div className="mt-5">
              {allPointWays.map(([points, activity]) => (
                <div
                  key={activity}
                  className="grid grid-cols-[105px_1fr] items-center border-b border-slate-200 py-3 last:border-b-0"
                >
                  <span className="text-xl font-black text-blue-950">
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
      <section className="bg-white px-3 py-16 md:px-6">
        <div className="relative mx-auto min-h-[760px] max-w-[96rem] overflow-hidden rounded-sm shadow-2xl">
          <img
            src="/MemberSHPE/SHPE National.jpeg"
            alt="SHPE National Convention members"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative flex min-h-[760px] items-center px-6 py-10 md:px-16">
            <article className="max-w-3xl rounded-[28px] bg-white/90 p-8 text-blue-950 shadow-2xl md:p-12">
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
                className="mt-10 inline-flex rounded bg-blue-950 px-12 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#15346e]"
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

