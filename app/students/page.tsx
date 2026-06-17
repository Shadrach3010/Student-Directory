import StudentCard from "../components/StudentCard";
import { students } from "../data/students";

export default function StudentsPage() {
    return (
        <div className="max-w-5xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                Student Directory
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        course={student.course}
                        image={student.image}
                    />
                ))}
            </div>

        </div>
    );
}