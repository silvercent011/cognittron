import { PropsWithChildren } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
};

export default function Button({
  children,
  variant,
}: PropsWithChildren<ButtonProps>) {
  const common = "px-4 py-3 rounded-xl";

  return <button className="">{children}</button>;
}
