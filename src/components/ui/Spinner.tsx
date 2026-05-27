import * as React from "react";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement>;

export function Spinner({ className = "", ...props }: SpinnerProps) {
  return (
    <span
      {...props}
      className={`inline-block h-4 w-4 animate-spin rounded-full border-2 border-current/40 border-t-current ${className}`}
    />
  );
}
