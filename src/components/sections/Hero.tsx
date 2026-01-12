import AppLink from "../ui/AppLink";
import { Link } from "react-router-dom";

export default function Hero() {
    return(

     <section className="relative overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hero.png')" }}
  />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-6">
    <div className="grid min-h-[90vh] grid-cols-1 items-center gap-14 lg:grid-cols-2">
      
      {/* LEFT */}
      <div className="max-w-xl">
        <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
          Simple habits · Zero overwhelm
        </div>

        <h1 className="mt-6 font-brand text-[45px] md:text-[60px] leading-[1.05] font-semibold text-[#212942]">
          Build better days,
          <br /> one habit at a time
        </h1>

        <p className="mt-6 text-[19px] leading-relaxed text-slate-600">
          Plan your daily routine, track habits, and make steady progress —
          without stress, guilt, or burnout.
        </p>

        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-6">
            <AppLink to="/signup" text="Get Started for Free" />

            <Link
              to="/features"
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition"
            >
              See how it works →
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            Free forever · No credit card required
          </p>

          <p className="text-sm text-slate-500">
            Already using Daywise?{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative hidden lg:flex justify-end">
        <img
          src="/images/hero-ui.png"
          alt="Habit checklist"
          className="w-[620px]"
        />
      </div>
    </div>
  </div>
</section>




    )
}