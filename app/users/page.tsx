import Link from "next/link";

type User = {
    id: string,
    name: string,
    email: string;
    company: {
        name: string;
    };
}


export default async function UsersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const users: User[] = await response.json();

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-8">
                Users
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="border rounded-2xl p-6 shadow-sm"
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {user.name}
                        </h2>

                        <p className="text-gray-600 mb-2">
                            {user.email}
                        </p>

                        <p className="text-sm">
                            {user.company.name}
                        </p>
                        <div className="flex justify-center mt-6">
                            <Link href={`/users/${user.id}`} className="inline-block text-white bg-black rounded-lg px-4 py-2 ml-4">View Details</Link>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}