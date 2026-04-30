function Services() {
  const services = [
    "Typing Classes (Hindi & English)",
    "Computer Basics and MS Office",
    "Web Development Training",
    "Tally and Accounting Training",
    "Digital Library and Mock Tests",
    "Interview and Job Preparation",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Our Services
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Practical and career-focused learning programs for students, beginners,
          and job seekers in Prayagraj.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
