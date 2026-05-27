import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const stats = [
  { value: "8,000+", label: "Community members" },
  { value: "140+", label: "Active mentors" },
  { value: "32", label: "Partner schools" },
];

const programs = [
  {
    title: "Confidence Labs",
    description:
      "Hands-on sessions that build communication, leadership, and real-world decision making.",
  },
  {
    title: "Career Launch Circles",
    description:
      "Small-group mentorship that connects interns with women leaders across industries.",
  },
  {
    title: "Community Showcases",
    description:
      "Monthly spotlights where members share impact stories, portfolios, and next steps.",
  },
];

const impact = [
  {
    title: "Scholarship Pathways",
    description:
      "Connecting students with funding, internships, and support that lasts beyond graduation.",
  },
  {
    title: "Future Leaders Hub",
    description:
      "A digital community for guidance, resources, and peer-to-peer encouragement.",
  },
  {
    title: "Industry Partnerships",
    description:
      "Working with mission-aligned companies to open new doors for emerging talent.",
  },
];

export default function Home() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-cyan-50"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl" />

      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-sm font-semibold uppercase tracking-wide text-white shadow-lg">
              SC
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">
                She Can Foundation
              </p>
              <p className="text-xs text-slate-500">
                Empowering future leaders
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link className="transition hover:text-slate-900" href="#top">
              Home
            </Link>
            <Link className="transition hover:text-slate-900" href="#about">
              About
            </Link>
            <Link className="transition hover:text-slate-900" href="#impact">
              Impact
            </Link>
            <Link className="transition hover:text-slate-900" href="#contact">
              Contact
            </Link>
            <Link className="transition hover:text-slate-900" href="/admin">
              Admin
            </Link>
          </nav>
          <Link
            href="#contact"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
          >
            Join the mission
          </Link>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-24 pt-32 md:pt-36">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
              <span className="block font-[var(--font-display)]">
                Build confidence.
              </span>
              Create opportunity for every young woman.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              She Can Foundation champions mentorship, leadership, and community
              resources so girls can pursue bold futures. This internship-ready
              experience connects visitors with a welcoming space to reach out.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Reach out today
              </Link>
              <Link
                href="#impact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
              >
                View our impact
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/80 px-4 py-4 text-center shadow-sm ring-1 ring-slate-200/60"
                >
                  <p className="text-xl font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center">
            <ContactForm />
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-40 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              Our focus
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              A community designed for momentum.
            </h2>
            <p className="text-base text-slate-600">
              We are a community-first foundation delivering resources, mentors,
              and pathways that guide young women from education to career-ready
              confidence. Every program is built to be practical, uplifting, and
              actionable.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="scroll-mt-40 space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                Impact
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Designed for measurable progress.
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
            >
              Partner with us
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {impact.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex items-center justify-center border-t border-slate-200/70 pt-8 text-center text-xs text-slate-500">
          <p>She Can Foundation - Faisal</p>
        </footer>
      </main>
    </div>
  );
}
