type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export default async function UserDetails ({
    params,
} : {
    params: Promise<{id: string}>;
}
) {
    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 

    const user: User = await response.json();

    return(
        <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="border rounded-2xl p-8 shadow-sm">
                <h1 className="text-4xl font-bold mb-6">
                    {user.name}
                </h1>

                <div className="space-y-4">
                    <p>
                        <strong>Email:</strong>{user.email}
                    </p>
                    <p>
                        <strong>Phone:</strong>{user.phone}
                    </p>
                    <p>
                        <strong>Website:</strong>{user.website}
                    </p>
                </div>
            </div>
        </div>
    )
}