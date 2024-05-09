import { InputHTMLAttributes } from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Input({
  value,
  onChange,
  placeholder,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full bg-theme_light-surface_1 rounded-xl border border-theme_light-primary_low_em px-4 py-3 text-theme_light-high_em focus:text-theme_light-high_em focus:bg-white focus:border-1 focus:border-transparent focus:ring-primary-50/50 focus:ring-4 focus:outline-4 focus:outline-primary-500 font-semibold"
    />
  );
}
