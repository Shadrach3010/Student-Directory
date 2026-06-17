import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Student Portal
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A modern platform for managing student profiles,
              academic information, and learning records using
              Next.js and TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/students"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Students
              </Link>

              <Link
                href="/about"
                className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold mb-2">3</h2>
            <p className="text-gray-600">Registered Students</p>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold mb-2">3</h2>
            <p className="text-gray-600">Academic Programs</p>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold mb-2">100%</h2>
            <p className="text-gray-600">Next.js Powered</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Features
            </h2>

            <p className="text-gray-600">
              Everything you need to manage student information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-bold mb-3">
                Student Profiles
              </h3>

              <p className="text-gray-600">
                Store and manage student details, courses,
                and academic levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="text-4xl mb-4">⚡</div>

              <h3 className="text-xl font-bold mb-3">
                Fast Navigation
              </h3>

              <p className="text-gray-600">
                Built with Next.js App Router for seamless
                page navigation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="text-4xl mb-4">🔒</div>

              <h3 className="text-xl font-bold mb-3">
                Modern Architecture
              </h3>

              <p className="text-gray-600">
                Developed using TypeScript, reusable
                components, and modern web practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Browse the student directory and learn more about
            the platform.
          </p>

          <Link
            href="/students"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}