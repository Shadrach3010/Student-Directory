import { ReactNode } from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  icon,
  rightIcon,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full
            border
            rounded-xl
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-slate-900
            ${icon ? "pl-10" : "pl-4"}
            ${rightIcon ? "pr-12" : "pr-4"}
          `}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}