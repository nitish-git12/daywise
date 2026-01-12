export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-6">

      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT: Context */}
          <div className="p-8 md:p-10">
           <div className="flex items-center">
  {/* Logo image */}
  <img
    src="/images/logo.png"
    alt="Daywise logo"
    className="h-8 w-[1.5rem] object-contain"
  />

  {/* Logo text */}
  <div className="font-brand text-[24px] font-bold tracking-[1px] text-slate-900 px-1">
    AYWISE
  </div>
</div>

            <span className="inline-block mt-10 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Simple habits · Zero overwhelm
            </span>

            <h1 className="mt-6 text-3xl font-bold text-slate-900">
              Create your Daywise account
            </h1>

            <p className="mt-4 text-slate-600">
              Start building better days — one habit at a time.
              No stress. No guilt.
            </p>
          </div>

          {/* RIGHT: Form */}
          <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-slate-200">

            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full name <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                />
                <p className="mt-1 text-sm text-slate-500">
                  Minimum 8 characters
                </p>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition"
              >
                Get started for free
              </button>

              <p className="text-center text-sm text-slate-500">
                Free forever · No credit card required
              </p>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already using Daywise?{" "}
              <a href="/login" className="font-medium text-green-600 hover:underline">
                Log in
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
