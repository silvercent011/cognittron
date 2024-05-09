import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant,
  ...props
}: PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>) {
  const common =
    "flex gap-3 items-center justify-center text-center rounded-2xl px-4 py-3 font-semibold transition-all";

  const primary =
    "bg-primary-500 text-white sm:hover:bg-primary-400 focus-visible:bg-primary-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-theme_light-primary_low_em disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-disabled";

  const secondary =
    "text-primary-500 bg-primary-25 border border-theme_light-primary_low_em sm:hover:text-primary-500 sm:hover:bg-[#F1EEFF] focus-visible:text-primary-500 focus-visible:bg-[#F1EEFF] focus-visible:outline focus-visible:outline-4 focus-visible:outline-theme_light-primary_low_em disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-disabled";

  return (
    <button
      {...props}
      className={`${variant === "secondary" ? secondary : primary} ${common}`}
    >
      {children}
    </button>
  );
}
