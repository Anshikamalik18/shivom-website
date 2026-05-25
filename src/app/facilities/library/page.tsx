import Link from 'next/link';

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">College Library</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Well-Stocked Resource Center for Learning</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom's central library is a modern, air-conditioned facility designed to support academic excellence. It serves as an intellectual hub providing comprehensive resources for research, learning, and academic growth.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
            <img src="/media/1.jpg" alt="Shivom College Library" className="w-full h-80 object-cover" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Collections</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Books:</strong> Over 15,000 books covering all academic areas</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Journals:</strong> National and international academic journals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>E-Resources:</strong> Access to multiple online databases and journals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Reference Materials:</strong> Encyclopedias, dictionaries, and handbooks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Theses & Dissertations:</strong> Research works from past years</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'Quiet Study Areas',
              'Group Discussion Zones',
              'Computer Terminals with Internet',
              'Photocopying & Printing Services',
              'Individual Reading Carrels',
              'Coffee & Water Facilities',
              'WiFi Connectivity',
              'Digital Archive Access',
            ].map((facility, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="text-gray-900 font-semibold">✓ {facility}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Library Hours</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2"><strong>Monday to Friday:</strong> 8:00 AM - 8:00 PM</p>
            <p className="text-gray-700 mb-2"><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
            <p className="text-gray-700 mb-2"><strong>Sunday & Holidays:</strong> Closed</p>
            <p className="text-gray-700 text-sm mt-3 font-semibold">Extended hours during examination period</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Library Membership</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            All enrolled students, faculty members, and staff are automatically members of the college library. Alumni can also apply for membership to access resources.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Borrowing Privileges</h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>• Students: Up to 5 books for 14 days</li>
            <li>• Faculty: Up to 10 books for 30 days</li>
            <li>• Renewals available if no other member has requested the book</li>
            <li>• Reference materials for in-library use only</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
