import Link from "next/link";
import { students } from "../../data/students";
import Image from "next/image";

export default async function StudentProfile({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const student = students.find((student) => student.id === Number(id));

    if (!student) {
        return <div className="p-8">Student Not Found</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-8">
            <div className="border rounded-2xl shadow-lg p-8">
                <Image
                    src={student.image}
                    alt={student.name}
                    width={400}
                    height={300}
                    className="rounded-xl w-full mb-6 object-cover"
                />
                <h1 className="text-4xl font-bold mb-6">{student.name}</h1>

                <div className="space-y-3">
                    <p><strong>Course:</strong> {student.course}</p>
                    <p><strong>Level:</strong> {student.level}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                </div>

                <Link href="/students" className="inline-block mt-6 bg-black text-white px-4 py-2 rounded-lg">
                    Back to Students
                </Link>
            </div>
        </div>
    );
}
