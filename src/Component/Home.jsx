import { useState } from "react";

const highlights = [
  "Hindi & English Typing Practice",
  "Computer Basics to Advanced Courses",
  "Digital Library with Guided Study",
  "Mock Tests and Certificate Support",
];

const courseCategories = [
  "University Courses",
  "NIELIT Courses",
  "Diploma Courses",
  "Programming Languages",
];

const featuredCourses = [
  {
    title: "Full Stack Web Development with Python and Django",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    summary:
      "Learn front-end and back-end development with Django, database integration, API basics, and real project deployment.",
    syllabus: [
      "HTML, CSS, JavaScript fundamentals",
      "Python programming essentials",
      "Django models, views, templates",
      "Authentication and admin panel",
      "REST API basics and deployment",
    ],
  },
  {
    title: "Full Stack Development with PHP & MySQL",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    summary:
      "Master dynamic websites using PHP and MySQL with authentication, dashboard creation, and CRUD projects.",
    syllabus: [
      "Core PHP syntax and logic building",
      "MySQL database design and queries",
      "CRUD operations with forms",
      "Login system and session handling",
      "Mini project and hosting basics",
    ],
  },
  {
    title: "Diploma in Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    summary:
      "Understand SEO, social media, paid ads, content strategy, and analytics for business growth and freelancing.",
    syllabus: [
      "SEO on-page and off-page",
      "Social media marketing strategy",
      "Google Ads and Meta Ads basics",
      "Content writing and branding",
      "Analytics and campaign reporting",
    ],
  },
  {
    title: "Computerized Accounting with Tally Prime",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    summary:
      "Learn GST billing, voucher entries, ledger management, and financial report generation in Tally Prime.",
    syllabus: [
      "Company creation and configuration",
      "Voucher entry and GST billing",
      "Inventory and stock management",
      "Ledger, trial balance, reports",
      "Practical accounting case studies",
    ],
  },
  {
    title: "Diploma in Information Technology",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    summary:
      "Build a strong IT foundation with computer fundamentals, office tools, internet skills, and practical lab work.",
    syllabus: [
      "Computer fundamentals and OS",
      "MS Word, Excel, PowerPoint",
      "Internet, email and cyber safety",
      "Typing, file and data management",
      "Lab assignments and assessments",
    ],
  },
  {
    title: "O Level Diploma",
    image:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900",
    summary:
      "Prepare for NIELIT O Level modules including IT tools, web design, Python concepts, and exam-oriented practice.",
    syllabus: [
      "M1-R5 IT tools and network basics",
      "M2-R5 Web design and publishing",
      "M3-R5 Python programming",
      "M4-R5 IoT and applications overview",
      "Previous paper practice and revision",
    ],
  },
  {
    title: "Advanced Excel & Office Automation",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    summary:
      "Gain advanced Excel skills like formulas, pivot tables, dashboards, charts, and office productivity automation.",
    syllabus: [
      "Advanced formulas and functions",
      "Pivot tables and data analysis",
      "Charts, dashboards and reporting",
      "Data cleaning and validation tools",
      "Office automation best practices",
    ],
  },
];

function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src="/home-bg-classroom.png"
          alt="Om Typing and Computer Institute classroom"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50" />

        <div className="relative mx-auto grid min-h-[82vh] w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-1 text-sm font-semibold text-emerald-300">
              Prayagraj's Trusted Skill Center
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Om Typing & Computer Institute & Digital Library, Prayagraj
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
              Build your career with industry-focused computer training, speed
              typing practice, and a modern digital library environment for
              students and job seekers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
                Join New Batch
              </button>
              <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Book Free Demo
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold text-white">What You Get</h2>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-100">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-950/35 p-3 text-center">
                <p className="text-2xl font-bold text-emerald-300">5000+</p>
                <p className="text-xs text-slate-200">Students</p>
              </div>
              <div className="rounded-xl bg-slate-950/35 p-3 text-center">
                <p className="text-2xl font-bold text-emerald-300">15+</p>
                <p className="text-xs text-slate-200">Courses</p>
              </div>
              <div className="rounded-xl bg-slate-950/35 p-3 text-center">
                <p className="text-2xl font-bold text-emerald-300">7 Days</p>
                <p className="text-xs text-slate-200">Library Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Typing Mastery
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Improve speed and accuracy in Hindi and English with daily
                practical sessions.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Computer Training
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn MS Office, Internet, Tally basics, and practical digital
                skills needed for jobs.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Digital Library
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Study in a focused space with digital resources, mock papers,
                and guided preparation support.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {courseCategories.map((category) => (
              <button
                key={category}
                className="rounded-lg border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Featured Courses
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Code, Create, Conquer: uncover the world of possibilities with
                our computer course training.
              </p>
            </div>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700">
              Browse All Courses
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <article
                key={course.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-900">
                  {course.title}
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCourse(
                      selectedCourse === course.title ? null : course.title
                    )
                  }
                  className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                >
                  Learn More →
                </button>

                {selectedCourse === course.title ? (
                  <div className="mt-3 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-sm">
                    <h4 className="text-base font-bold text-slate-900">
                      {course.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {course.summary}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      Syllabus
                    </p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {course.syllabus.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14">
        <img
          src="/home-bg-classroom.png"
          alt="Institute stats background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-5xl font-extrabold text-white">4,000+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-200">
                Students
              </p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">30+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-200">
                Courses
              </p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">3,200+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-200">
                Certified Students
              </p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">20+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-200">
                Faculty
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7fc] py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              Education For Everyone
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
              Why Choose Us?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              At INFOMAX, we are dedicated to empowering learners with the
              skills and knowledge needed to excel in the ever-evolving tech
              world. Here&apos;s why we stand out as the best choice for your
              computer education.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-md bg-[#f5f2c9] p-5 shadow-sm">
              <p className="text-2xl">🏅</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Comprehensive Curriculum
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Our courses are designed to meet industry standards, covering
                the latest technologies and practical applications.
              </p>
            </article>

            <article className="rounded-md bg-[#f0e4f5] p-5 shadow-sm">
              <p className="text-2xl">📚</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Expert Faculty
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn from certified professionals and experienced instructors.
              </p>
            </article>

            <article className="rounded-md bg-[#f6e3e8] p-5 shadow-sm">
              <p className="text-2xl">🎥</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Hands-On Training
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Practical learning through live projects and lab-based sessions.
              </p>
            </article>

            <article className="rounded-md bg-[#e4f0f8] p-5 shadow-sm">
              <p className="text-2xl">👥</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Personalized Attention
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Small batch sizes to ensure individual focus and better
                learning outcomes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7fc] py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Student&apos;s Feedback
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learning communicate to global world and build a bright future and
              career development, increase your skill with our study.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-md bg-[#e9ecfd] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Prince Saxena"
                  className="h-12 w-12 rounded-full border border-white object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Prince Saxena
                  </h3>
                  <p className="text-sm text-slate-600">Full Stack Web Development</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                No doubt, it is foremost the best institute to learn programming.
                The teachers are not just theoretically training concepts, but
                they make us learn practically and clearly.
              </p>
              <p className="mt-4 text-amber-500">★★★★★</p>
            </article>

            <article className="rounded-md bg-[#e9ecfd] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="Akshat Singh"
                  className="h-12 w-12 rounded-full border border-white object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Akshat Singh
                  </h3>
                  <p className="text-sm text-slate-600">Data Structure</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                One of the best institutes for computer science learning here. I
                completed C and C++ programming language and always got great
                learning support from the teachers.
              </p>
              <p className="mt-4 text-amber-500">★★★★★</p>
            </article>

            <article className="rounded-md bg-[#e9ecfd] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Neeraj Chandra Belwal"
                  className="h-12 w-12 rounded-full border border-white object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Neeraj Chandra Belwal
                  </h3>
                  <p className="text-sm text-slate-600">Full Stack Web Development</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                My experience is very good with this institute. Teachers explain
                every topic in a simple way and guide for practical work like C++,
                web development, and tally.
              </p>
              <p className="mt-4 text-amber-500">★★★★★</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[260px_1fr]">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-slate-900">
                Authorization &amp; Affiliation
              </h2>
            </div>

            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
              <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                MSME
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                ASCO
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                NIELIT
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                National Body
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                Integral University
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200" />
        </div>
      </section>

    </main>
  );
}

export default Home;
