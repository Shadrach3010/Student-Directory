import { students } from "../data/students";

export default function DashboardPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

            {/*Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                    <h2 className="text-gray-500 text-sm">
                        Total Students
                    </h2>

                    <p className="text-4xl font-bold mt-2">
                        {students.length}
                    </p>
                </div>

                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                    <h2 className="text-gray-500 text-sm">
                        Courses
                    </h2>

                    <p className="text-4xl font-bold mt-2">
                        3
                    </p>
                </div>

                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                    <h2 className="text-gray-500 text-sm">
                        Active Students
                    </h2>

                    <p className="text-4xl font-bold mt-2">
                        100%
                    </p>
                </div>
            </div>

            {/* Recent Students */}
            <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-2xl font-semibold">
                        Recent Students
                    </h2>
                </div>

                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left p-4">Name</th>
                            <th className="text-left p-4">Course</th>
                            <th className="text-left p-4">Level</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr
                                key={student.id}
                                className="border-t"
                            >
                                <td className="p-4">
                                    {student.name}
                                </td>

                                <td className="p-4">
                                    {student.course}
                                </td>

                                <td className="p-4">
                                    {student.level}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}