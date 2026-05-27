import * as React from "react";

type FormCardProps = {
  title: string;
  description: string;
  id?: string;
  children: React.ReactNode;
};

export function FormCard({ title, description, id, children }: FormCardProps) {
  return (
    <section
      id={id}
      className="w-full max-w-md scroll-mt-40 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-slate-200/70 backdrop-blur"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
