"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-xl mx-auto text-center py-20">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong
      </h1>

      <p className="mb-6">{error.message}</p>

      <button
        onClick={reset}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}