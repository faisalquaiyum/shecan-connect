import * as React from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-lg shadow-rose-200/60 hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "border border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900",
  ghost: "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900",
  danger: "bg-rose-600 text-white shadow-sm hover:bg-rose-500",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
