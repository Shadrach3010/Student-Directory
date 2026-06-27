interface InputProps {
    label: string;
    type?: string;
    placeholder: string;
}

export default function Input({ label, type = "text", placeholder, }: InputProps) {
    return (
        <div className="space-y-2">
            <label className="font-medium">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-slate-900
        "
            />
        </div>
    )
}