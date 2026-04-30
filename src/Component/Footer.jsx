const usefulLinks = [
  "NIELIT",
  "Integral University",
  "CCC Online Test",
  "O Level Online Test",
  "A Level Online Test",
  "Coding Tutorials",
];

const internalLinks = [
  "Contact Us",
  "Become Teacher",
  "Mock Test",
  "FAQs",
  "Verify Certificate",
];

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-[#f5f5f7] text-slate-700">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg">
              🎓
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Infomax Computer Academy
              </h3>
              <p className="text-xs text-slate-500">YouTube</p>
            </div>
          </div>

          <p className="mb-6 max-w-xs text-sm leading-6 text-slate-500">
            Our mission at INFOMAX is to empower individuals with essential
            computer skills for success in the digital age.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-violet-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-400 hover:text-violet-700">
              Contact With Us →
            </button>
            <button className="rounded-full border border-violet-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-400 hover:text-violet-700">
              Install App →
            </button>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-slate-900">
            Useful Links
          </h4>
          <ul className="space-y-2 text-sm text-slate-500">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a className="transition hover:text-slate-800" href="#!">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-slate-900">
            Internal Links
          </h4>
          <ul className="space-y-2 text-sm text-slate-500">
            {internalLinks.map((link) => (
              <li key={link}>
                <a className="transition hover:text-slate-800" href="#!">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-slate-900">
            Get Contact
          </h4>
          <ul className="space-y-2 text-sm leading-6 text-slate-500">
            <li>Phone: +91-8874588766</li>
            <li>E-mail: contact@infomax.org.in</li>
            <li>
              Location:
              <br />
              G.R. Complex Preetam Nagar
              <br />
              Dhoomanganj Prayagraj Uttar
              <br />
              Pradesh, Pin Code: 211011
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-4 text-sm text-slate-500">
            {["f", "x", "ig", "in", "yt", "wa"].map((item) => (
              <a key={item} href="#!" className="transition hover:text-slate-800">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>Copyright © 2026, Powered By : Web Infomax IT Solutions</p>
          <div className="flex items-center gap-4">
            <a href="#!" className="transition hover:text-slate-800">
              Policy
            </a>
            <a href="#!" className="transition hover:text-slate-800">
              Admission
            </a>
            <a href="#!" className="transition hover:text-slate-800">
              Student
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
