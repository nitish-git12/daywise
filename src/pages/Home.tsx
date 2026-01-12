import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
export default function Home() {

    return(
        <>
         <Header />
    <Hero />
      <section className="relative mt-10 bg-white py-10">
  <div className="mx-auto max-w-6xl px-6">

    {/* Heading */}
    <div className="text-center">
      <h2 className="font-brand text-[32px] leading-tight font-semibold text-[#212942]">
        Staying consistent is hard.
        <br />
        Tracking shouldn’t be.
      </h2>

      <p className="mt-4 text-[16px] text-slate-500">
        Most habit apps fail for simple reasons. We designed Daywise to fix them.
      </p>
    </div>

    {/* Problem cards */}
    <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">

      {/* Card 1 */}
      <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-6 py-10 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100">
          <img src="/images/ical.png" alt="" className="w-12" />
        </div>

        <p className="mt-6 text-[16px] font-semibold text-slate-900">
          Forget what you planned
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Yesterday’s plan disappears the moment today starts.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-6 py-10 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100">
          <img src="/images/emoji.jpg" alt="" className="w-12" />
        </div>

        <p className="mt-6 text-[16px] font-semibold text-slate-900">
          Lose motivation quickly
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Streak pressure kills consistency after a few days.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-6 py-10 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
          <img src="/images/clock.png" alt="" className="w-12" />
        </div>

        <p className="mt-6 text-[16px] font-semibold text-slate-900">
          No idea where time went
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Days pass without clarity or visible progress.
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="mt-16 flex items-center justify-center gap-6 text-slate-400">
      <span className="h-px w-20 bg-slate-200" />
      <span className="text-sm font-medium">
        We fix that — simply.
      </span>
      <span className="h-px w-20 bg-slate-200" />
    </div>

  </div>
</section>

        </>
    )
}