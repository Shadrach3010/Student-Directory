interface ButtonProps{
    children: React.ReactNode;
    type?: "button" | "submit";
}

export default function Button ({children, type = "button", }: ButtonProps){
    return(
        <button
            type={type}
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition duration-300"
        >
            {children}
        </button>
    )
}