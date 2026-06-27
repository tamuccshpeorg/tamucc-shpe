export default function SiteFooter() {
  return (
    <footer className="bg-[#114b7a] px-8 py-12 text-white">
      <div className="mx-auto grid max-w-[1540px] gap-10 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <div className="mt-5 space-y-3 text-lg leading-7">
            <p>
              <span className="font-medium">President Email: </span>
              <a
                href="mailto:lroblesaguirre@islander.tamucc.edu"
                className="text-[#ff6b1a] hover:text-orange-200"
              >
                lroblesaguirre@islander.tamucc.edu
              </a>
            </p>
            <p>
              <span className="font-medium">Corporate Email: </span>
              <a
                href="mailto:tamucc.shpe.org@gmail.com"
                className="text-[#ff6b1a] hover:text-orange-200"
              >
                tamucc.shpe.org@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold">Follow us on Social Media</h2>
          <div className="mt-5 flex justify-center gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M14 8.75h2.25V5.2a15.5 15.5 0 0 0-3.28-.2C9.72 5 7.5 6.99 7.5 10.63v3.12H4v3.97h3.5V24h4.3v-6.28h3.37l.53-3.97h-3.9v-2.73c0-1.15.31-2.27 2.2-2.27Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M5.34 7.43A2.5 2.5 0 1 1 5.32 2.43a2.5 2.5 0 0 1 .02 5ZM3.19 21.5h4.28V9.13H3.19V21.5Zm6.62-12.37h4.1v1.69h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.1 2.84 5.1 6.53v6.37h-4.27v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9.81V9.13Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M7.8 2h8.4A5.82 5.82 0 0 1 22 7.8v8.4a5.82 5.82 0 0 1-5.8 5.8H7.8A5.82 5.82 0 0 1 2 16.2V7.8A5.82 5.82 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mx-auto max-w-lg text-balance text-xl font-bold 2xl:whitespace-nowrap 2xl:text-2xl">
            Find more SHPE TAMU-CC resources at our
          </h2>
          <a
            href="https://linktr.ee/shpe_tamucc"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-2xl font-bold text-[#ff6b1a] hover:text-orange-200"
          >
            Linktree
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 h-px max-w-[1800px] bg-white/25" />
    </footer>
  );
}
