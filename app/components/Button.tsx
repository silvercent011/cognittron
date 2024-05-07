import { PropsWithChildren } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
};

export default function Button({
  children,
  variant,
}: PropsWithChildren<ButtonProps>) {
  const common = "px-4 py-3 rounded-xl";

  return (
    <button className="flex items-center justify-center text-center rounded-lg text-body1 font-semibold transition-all py-3 px-4 gap-3 bg-primary-500 text-white sm:hover:bg-primary-400 focus-visible:bg-primary-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#E2DCFF] disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-disabled">
      {children}
    </button>
  );
}
