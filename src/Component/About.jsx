import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-[#f7f7fc] py-20">
        <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Build{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
            <span className="ml-1 text-slate-300">|</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Digital Mastery Awaits: Ignite Your Career with Our Comprehensive
            Computer Course Training.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Log in to Start →
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Contact US →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-md border border-slate-200">
            <img
              src="/about-welcome-new.png"
              alt="Infomax learning space"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              About Infomax
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900">
              Welcome to INFOMAX for your skills with best Computer courses.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              At <span className="font-semibold text-slate-800">INFOMAX</span>,
              we are more than just an educational institution; we are a
              community of passionate educators, dedicated learners, and
              technology enthusiasts.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Established with the vision of bridging the gap between ambition
              and expertise, we have been on a mission to empower individuals
              with the skills needed to thrive in the ever-evolving world of
              technology.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Start Learning
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-indigo-700 transition hover:text-indigo-800"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-500 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight text-white">
              Happy
              <br />
              Learning
            </h2>
          </div>

          <div className="md:col-span-1">
            <p className="max-w-xl text-base leading-7 text-blue-50">
              Learning about technology is not just about mastering tools, but
              understanding how to innovate, adapt, and create solutions that
              shape the world.
            </p>
          </div>

          <div className="md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-100"
            >
              Connect with Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Why learn with our courses?
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              At INFOMAX, we provide top-quality, industry-relevant courses to
              help you gain practical skills and boost your career in the IT
              world. Here&apos;s why you should choose us:
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="relative rounded-sm border border-slate-200 bg-white p-5">
              <span className="absolute right-4 top-3 text-6xl font-bold text-slate-100">
                1
              </span>
              <p className="text-2xl">💡</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Quality Education
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We provide top-notch education led by experienced instructors who
                are deeply passionate about programming.
              </p>
            </article>

            <article className="relative rounded-sm border border-slate-200 bg-white p-5">
              <span className="absolute right-4 top-3 text-6xl font-bold text-slate-100">
                2
              </span>
              <p className="text-2xl">🎓</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Career Opportunities
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our institute has a strong track record of helping students
                secure lucrative positions in the tech industry.
              </p>
            </article>

            <article className="relative rounded-sm border border-slate-200 bg-white p-5">
              <span className="absolute right-4 top-3 text-6xl font-bold text-slate-100">
                3
              </span>
              <p className="text-2xl">🧪</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Practical Experience
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We believe in learning by doing. Our hands-on approach to
                education means you gain practical experience.
              </p>
            </article>

            <article className="relative rounded-sm border border-slate-200 bg-white p-5">
              <span className="absolute right-4 top-3 text-6xl font-bold text-slate-100">
                4
              </span>
              <p className="text-2xl">🏅</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Certifications
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our institute offers opportunities to earn industry-recognized
                certifications upon completion of selected programs.
              </p>
            </article>
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-slate-900">Our Team</h4>
            <p className="mt-2 text-sm text-slate-500">Infomax Happy Family</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="grid gap-4 sm:grid-cols-[220px_1fr]">
              <div className="overflow-hidden rounded-md">
                <img
                  src="/about-welcome-new.png"
                  alt="Founder Dinesh Maurya"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  Dinesh Maurya
                </h3>
                <p className="mt-1 text-sm font-semibold text-indigo-600">
                  Founder - ICA
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Mr. Dinesh Maurya is the founder of Infomax Computer Academy,
                  established with a vision to provide quality computer
                  education and skill-based training. Through innovation,
                  commitment, and guidance, he continues to inspire growth and
                  excellence within the organization.
                </p>

                <div className="mt-4 flex gap-4 text-slate-500">
                  <span>f</span>
                  <span>x</span>
                  <span>ig</span>
                  <span>in</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <p>📞 +91-9598948810</p>
                  <p>✉ admin@infomax.org.in</p>
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-3 gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            {[
              "https://randomuser.me/api/portraits/men/12.jpg",
              "https://randomuser.me/api/portraits/men/31.jpg",
              "https://randomuser.me/api/portraits/men/41.jpg",
              "https://randomuser.me/api/portraits/women/35.jpg",
              "https://randomuser.me/api/portraits/men/56.jpg",
              "https://randomuser.me/api/portraits/men/67.jpg",
              "https://randomuser.me/api/portraits/men/22.jpg",
              "https://randomuser.me/api/portraits/men/28.jpg",
              "https://randomuser.me/api/portraits/men/45.jpg",
            ].map((member, idx) => (
              <div key={member} className="overflow-hidden rounded-md">
                <img
                  src={member}
                  alt={`Team member ${idx + 1}`}
                  className="h-28 w-full object-cover sm:h-32"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;