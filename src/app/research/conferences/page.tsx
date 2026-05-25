import Link from 'next/link';

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academic Conferences</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Platform for Research Presentation and Knowledge Exchange</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Our Conferences</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom MBA College regularly organizes and participates in academic conferences that provide faculty and students with opportunities to present their research, engage in scholarly discussions, and network with academics from other institutions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Recent Conferences</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                name: 'International Conference on Business Innovation & Digital Transformation 2024',
                date: 'March 15-17, 2024',
                venue: 'Shivom MBA College Campus',
              },
              {
                name: 'National Conference on Sustainable Business Practices',
                date: 'February 10-11, 2024',
                venue: 'Virtual + On-Campus Hybrid',
              },
              {
                name: 'Conference on Technology & Management Excellence',
                date: 'January 20-22, 2024',
                venue: 'Shivom MBA College Campus',
              },
            ].map((conf, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900 text-lg">{conf.name}</p>
                <p className="text-gray-600 text-sm"><strong>Date:</strong> {conf.date}</p>
                <p className="text-gray-600 text-sm"><strong>Venue:</strong> {conf.venue}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Conference Benefits</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Opportunity to present original research findings</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Networking with scholars and practitioners globally</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Exposure to latest research trends and methodologies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Published proceedings and citations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Professional development opportunities</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Upcoming Conferences 2025</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">Information about upcoming conferences will be updated soon. Faculty and students are encouraged to check back regularly for call for papers and registration details.</p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-900">
              Subscribe to Research Updates →
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Research Publication</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Presented papers can be published in:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8 list-disc list-inside">
            <li>Conference proceedings with ISBN</li>
            <li>Indexed journals (ISSN recognized)</li>
            <li>Research publications repository</li>
            <li>Online research platforms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
