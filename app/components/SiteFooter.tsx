export default function SiteFooter() {
  return (
    <footer className="bg-[#002b4f] px-8 py-9 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.15fr_0.9fr]">
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
            <p className="text-base leading-7">
              <span className="font-semibold">President Email:</span>
              <br />
              <a
                href="mailto:lroblesaguirre@islander.tamucc.edu"
                className="text-[#7fffd6] transition hover:text-white"
              >
                lroblesaguirre@islander.tamucc.edu
              </a>
            </p>
            <p className="mt-3 text-base leading-7">
              <span className="font-semibold">Corporate Email:</span>
              <br />
              <a
                href="mailto:tamucc.shpe.org@gmail.com"
                className="text-[#7fffd6] transition hover:text-white"
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
              className="mt-3 inline-block text-2xl font-extrabold text-[#7fffd6] transition duration-300 hover:-translate-y-1.5 hover:text-white"
            >
              Linktree
            </a>
          </div>
        </div>

        <div className="mt-7 h-px w-full max-w-4xl bg-[#7fffd6]/70" />

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-md transition duration-300 hover:-translate-y-1.5 hover:bg-[#008c5a]/40"
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
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-md transition duration-300 hover:-translate-y-1.5 hover:bg-[#008c5a]/40"
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
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-md transition duration-300 hover:-translate-y-1.5 hover:bg-[#008c5a]/40"
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
  );
}
