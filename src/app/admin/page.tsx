import Link from "next/link";
import SubmissionsTable from "@/components/SubmissionsTable";
import { dbConnect } from "@/lib/mongodb";
import Submission from "@/models/Submission";
import type { SubmissionRow } from "@/types/submission";

export const dynamic = "force-dynamic";

type LeanSubmission = {
  _id: { toString(): string };
  name: string;
  email: string;
  message: string;
  createdAt: Date | string;
};

export default async function AdminPage() {
  await dbConnect();
  const submissions = await Submission.find({})
    .sort({ createdAt: -1 })
    .lean<LeanSubmission[]>();

  const rows: SubmissionRow[] = submissions.map((item) => ({
    _id: item._id.toString(),
    name: item.name,
    email: item.email,
    message: item.message,
    createdAt:
      item.createdAt instanceof Date
        ? item.createdAt.toISOString()
        : new Date(item.createdAt).toISOString(),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-cyan-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
              Admin
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Message Submissions
            </h1>
            <p className="text-sm text-slate-600">
              Review, sort, and manage the latest contact form entries.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
          >
            Back to site
          </Link>
        </div>

        <div className="rounded-3xl bg-white/85 p-6 shadow-xl ring-1 ring-slate-200/70 backdrop-blur">
          <SubmissionsTable initialSubmissions={rows} />
        </div>
      </div>
    </div>
  );
}
