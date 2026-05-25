import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Get in touch with Shivom College of Management and Technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">College Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  Shivom College of Management and Technology<br />
                  V.P.O. Nigana, Rohtak<br />
                  Haryana, India
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                <p className="text-gray-700 mb-1">
                  <strong>Call:</strong> <a href="tel:+918901459200" className="text-blue-600 hover:text-blue-900">+91 8901459200</a>
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Call:</strong> <a href="tel:+919255443333" className="text-blue-600 hover:text-blue-900">+91 9255443333</a>
                </p>
                <p className="text-gray-700">
                  <strong>WhatsApp:</strong> <a href="https://wa.me/918901459200" className="text-blue-600 hover:text-blue-900">+91 8901459200</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700 mb-1">
                  <strong>General:</strong> <a href="mailto:info@shivommbacollege.in" className="text-blue-600 hover:text-blue-900">info@shivommbacollege.in</a>
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Admission:</strong> <a href="mailto:info@shivommbacollege.in" className="text-blue-600 hover:text-blue-900">info@shivommbacollege.in</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-700 mb-1">
                  <strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Saturday:</strong> 10:00 AM - 2:00 PM
                </p>
                <p className="text-gray-700">
                  <strong>Sunday & Holidays:</strong> Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Department Contacts</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="font-semibold text-gray-900">Admission Office</p>
                <p className="text-gray-600 text-sm">For inquiries about programs and admission process.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="font-semibold text-gray-900">Academic Affairs</p>
                <p className="text-gray-600 text-sm">For curriculum and academic-related matters.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="font-semibold text-gray-900">Placement Cell</p>
                <p className="text-gray-600 text-sm">For recruitment and career opportunities.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="font-semibold text-gray-900">Administration</p>
                <p className="text-gray-600 text-sm">For general administrative inquiries.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="font-semibold text-gray-900">Student Affairs</p>
                <p className="text-gray-600 text-sm">For hostel, clubs, and student-related matters.</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-900 font-semibold">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-900 font-semibold">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-900 font-semibold">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-900 font-semibold">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                  <option>Select Subject</option>
                  <option>Admission Inquiry</option>
                  <option>Academic Questions</option>
                  <option>Placement Inquiry</option>
                  <option>General Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Please enter your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">College Location</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              title="Shivom College Location"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sShiv+Om+College+of+Management+and+Technology!5e0!6i10"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
