function Signup() {
  return (
    <section className="bg-[#f8f8fc] py-16">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Sign Up</h1>
          <p className="mt-2 text-sm text-slate-600">
            Create your account to get started.
          </p>

          <form className="mt-6 grid gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
            <button
              type="button"
              className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
