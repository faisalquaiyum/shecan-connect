"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import type { SubmissionRow } from "@/types/submission";

type SubmissionsTableProps = {
  initialSubmissions: SubmissionRow[];
};

const formatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export default function SubmissionsTable({
  initialSubmissions,
}: SubmissionsTableProps) {
  const [rows, setRows] = useState(initialSubmissions);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this submission?");
    if (!confirmed) {
      return;
    }

    setDeletingId(id);
    try {
      const response = await fetch(`/api/submissions/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        toast.error(data?.message ?? "Failed to delete submission.");
        return;
      }

      setRows((prev) => prev.filter((row) => row._id !== id));
      toast.success("Submission deleted.");
    } catch {
      toast.error("Failed to delete submission.");
    } finally {
      setDeletingId(null);
    }
  };

  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-10 text-center">
        <p className="text-sm font-semibold text-slate-700">
          No submissions yet.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          New messages will appear here as soon as they are submitted.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-separate border-spacing-y-3 text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4">Name</th>
            <th className="px-4">Email</th>
            <th className="px-4">Message</th>
            <th className="px-4">Received</th>
            <th className="px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row._id}
              className="rounded-2xl bg-white/90 shadow-sm ring-1 ring-slate-200/70"
            >
              <td className="px-4 py-4 font-semibold text-slate-900">
                {row.name}
              </td>
              <td className="px-4 py-4 text-slate-600">
                <a
                  className="hover:text-slate-900"
                  href={`mailto:${row.email}`}
                >
                  {row.email}
                </a>
              </td>
              <td className="px-4 py-4 text-slate-600">
                <span className="line-clamp-2 block max-w-xs">
                  {row.message}
                </span>
              </td>
              <td className="px-4 py-4 text-slate-600">
                {formatter.format(new Date(row.createdAt))}
              </td>
              <td className="px-4 py-4 text-right">
                <Button
                  variant="danger"
                  className="px-3 py-2 text-xs"
                  onClick={() => handleDelete(row._id)}
                  disabled={deletingId === row._id}
                >
                  {deletingId === row._id ? (
                    <>
                      <Spinner className="h-3 w-3" />
                      Deleting
                    </>
                  ) : (
                    "Delete"
                  )}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
