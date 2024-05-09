import { LabelHTMLAttributes, PropsWithChildren } from "react";

export function Label({
  children,
  ...props
}: PropsWithChildren & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} className="text-theme_light-med_em font-semibold text-sm">
      {children}
    </label>
  );
}
