export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 text-lg">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">
              📧 Email
            </h2>

            <p className="text-gray-600">
              support@studentportal.com
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">
              📞 Phone
            </h2>

            <p className="text-gray-600">
              +232 00 000 000
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">
              📍 Address
            </h2>

            <p className="text-gray-600">
              Freetown, Sierra Leone
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}