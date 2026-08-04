export default function SiteFooter() {
  return (
    <footer className="bg-[linear-gradient(135deg,#001f5b_0%,#0b3d7a_55%,#00589f_100%)] px-8 py-10 text-white">
      <div className="mx-auto grid max-w-[1540px] items-start gap-10 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="mt-5 space-y-3 text-base leading-7">
            <p>
              <span className="font-medium">President Email: </span>
              <a
                href="mailto:lroblesaguirre@islander.tamucc.edu"
                className="font-medium text-[#7ce2f0] underline-offset-4 transition hover:text-white hover:underline"
              >
                lroblesaguirre@islander.tamucc.edu
              </a>
            </p>
            <p>
              <span className="font-medium">Corporate Email: </span>
              <a
                href="mailto:tamucc.shpe.org@gmail.com"
                className="font-medium text-[#7ce2f0] underline-offset-4 transition hover:text-white hover:underline"
              >
                tamucc.shpe.org@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">Follow Us on Social Media</h2>
          <div className="mt-5 flex justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61592136180326"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#7ce2f0] hover:text-[#001f5b]"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M14 8.75h2.25V5.2a15.5 15.5 0 0 0-3.28-.2C9.72 5 7.5 6.99 7.5 10.63v3.12H4v3.97h3.5V24h4.3v-6.28h3.37l.53-3.97h-3.9v-2.73c0-1.15.31-2.27 2.2-2.27Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/society-of-hispanic-professional-engineers-shpe-tamu-cc/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#7ce2f0] hover:text-[#001f5b]"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M5.34 7.43A2.5 2.5 0 1 1 5.32 2.43a2.5 2.5 0 0 1 .02 5ZM3.19 21.5h4.28V9.13H3.19V21.5Zm6.62-12.37h4.1v1.69h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.1 2.84 5.1 6.53v6.37h-4.27v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9.81V9.13Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tamucc.shpe/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#7ce2f0] hover:text-[#001f5b]"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M7.8 2h8.4A5.82 5.82 0 0 1 22 7.8v8.4a5.82 5.82 0 0 1-5.8 5.8H7.8A5.82 5.82 0 0 1 2 16.2V7.8A5.82 5.82 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mx-auto max-w-lg text-balance text-lg font-bold 2xl:whitespace-nowrap 2xl:text-xl">
            Find more SHPE TAMU-CC resources at our
          </h2>
          <a
            href="https://linktr.ee/shpe_tamucc"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-xl font-bold text-[#7ce2f0] underline-offset-4 transition hover:text-white hover:underline"
          >
            Linktree
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 h-px max-w-[1800px] bg-white/25" />
    </footer>
  );
}
