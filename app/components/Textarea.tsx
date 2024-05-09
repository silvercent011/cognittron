import { TextareaHTMLAttributes } from "react";

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Textarea({
  value,
  onChange,
  placeholder,
  ...props
}: TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      {...props}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-theme_light-primary_low_em bg-theme_light-surface_1 px-4 py-3 text-theme_light-high_em focus:text-theme_light-high_em focus:bg-white focus:border-1 focus:border-transparent focus:ring-primary-50/50 focus:ring-4 focus:outline-4 focus:outline-primary-500 font-semibold"
    />
  );
}
