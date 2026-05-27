import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full min-h-[140px] resize-none rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200/70 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
