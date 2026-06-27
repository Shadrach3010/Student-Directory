export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Loading users...
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="h-40 rounded-2xl bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}