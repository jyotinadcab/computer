function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#f4ecff] to-[#f8f8fc] py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-block rounded-full bg-violet-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Thank you! If you have any more questions or need further
              assistance, feel free to ask.
            </h1>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl text-indigo-600">🎧</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Contact Phone Number
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                +91-9598948810, +91-8874588766
                <br />
                +91-9839263691
                <br />
                contact@infomax.org.in
                <br />
                www.infomax.org.in
              </p>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl text-indigo-600">📍</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Our Main Branch
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                G. R. Complex, Preetam Nagar
                <br />
                Dhoomanganj, Prayagraj - 211011
                <br />
                Uttar Pradesh [India]
                <br />
                Share Location
              </p>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl text-indigo-600">📍</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Our Branch
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Prem Nagar Chauraha
                <br />
                Vill. & Post Belsar, Basti
                <br />
                Uttar Pradesh [India]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8fc] py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/contact-illustration-new.png"
              alt="Contact illustration"
              className="h-full w-full object-cover"
            />
          </div>
          <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Get in touch
            </h2>
            <div className="mt-5 grid gap-3">
              <input
                type="text"
                placeholder="Name"
                className="rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="rounded-md border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
              />
              <button
                type="button"
                className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                GET IT NOW →
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
