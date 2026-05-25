import Link from 'next/link';

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">College Hostel</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Comfortable On-Campus Residence for Students</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom College provides well-maintained hostel facilities for outstation students seeking comfortable on-campus accommodation. Our hostels are designed to provide a home-like environment that fosters community building and academic focus.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
            <img src="/media/2.jpg" alt="Shivom College Hostel" className="w-full h-80 object-cover" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Accommodation Options</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Single Room',
                description: 'Individual rooms with attached bathroom, ideal for focused study',
              },
              {
                title: 'Double Occupancy',
                description: 'Shared rooms for two students, promoting peer learning and interaction',
              },
              {
                title: 'Triple Occupancy',
                description: 'Cost-effective option with three beds per room',
              },
            ].map((option, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900 text-lg">{option.title}</p>
                <p className="text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Room Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Furnished beds and study tables',
              'Attached bathroom with hot water',
              '24/7 Power backup',
              'High-speed WiFi connectivity',
              'Air conditioning',
              'Cupboards and personal storage',
            ].map((amenity, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Common Facilities</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Dining Hall:</strong> Nutritious meals served three times daily with vegetarian and non-vegetarian options</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Recreation Area:</strong> Spacious common room with TV and recreation facilities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Sports Facilities:</strong> Indoor games room with badminton and table tennis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Laundry Service:</strong> In-house laundry with regular pickup and delivery</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Medical Facility:</strong> First-aid support and access to medical care</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Security:</strong> 24/7 security with CCTV surveillance</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Rules & Regulations</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hostels operate under strict discipline with clear guidelines to maintain a peaceful and productive living environment. Students are expected to follow hostel rules and adhere to designated curfew timings.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Fee Structure</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2">Hostel fees vary based on room type and facilities. For detailed fee information, please download the prospectus or contact the admission cell.</p>
            <p className="text-gray-700 text-sm mt-3">Payment plans and scholarships for economically weaker students are available.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
