export default function App() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <img
          src="/images/ScreenbridgeLogo.svg"
          alt="Screenbridge"
          className="mx-auto mb-12 h-8"
        />
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lilac">
          UGC → Premium CTV
        </p>
        <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
          Bring the Power of UGC to <span className="text-coral">CTV.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-lilac">
          Screenbridge turns the social content already performing for you into
          broadcast-quality spots for Roku, Hulu, and YouTube. First cut in days.
        </p>
        <a
          href="mailto:info@screenbridge.tv"
          className="mt-8 inline-block rounded-full bg-indigo-bright px-7 py-3.5 font-semibold text-white"
        >
          Book a Free Strategy Call
        </a>
        <p className="mt-16 text-sm text-lilac/70">
          Starter scaffold — see BRIEF.md. Lovable: rebuild this homepage from the
          assets in /public and the design DNA in the brief.
        </p>
      </section>
    </main>
  );
}
