function HomeTwo() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/home-hero.png"
            alt="Students learning computer courses"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-700">
            Another Home Section
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Smart Learning Programs for Every Student
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Start from basic computer skills and grow to advanced training with
            real practice, tests, and certificates. This section works as your
            second home page block.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800">
              View Programs
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Contact Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTwo;
