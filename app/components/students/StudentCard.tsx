import Link from "next/link";
import Image from "next/image";

interface StudentCardProps {
    id: number;
    name: string;
    course: string;
    image: string;
}

export default function StudentCard({ id, name, course, image }: StudentCardProps) {
    return (
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <Image
                src={image}
                alt={name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{course}</p>

            <Link href={`/students/${id}`} className="inline-block bg-black text-white px-4 py-2 rounded-lg">
                View Profile
            </Link>
        </div>
    );
}