import Link from 'next/link';

export default function MBAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master of Business Administration (MBA)</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">2-Year Full-Time Postgraduate Program</p>
          <div className="mt-8 rounded-3xl overflow-hidden shadow-lg">
            <img src="/media/mba-hero.jpg" alt="MBA program at Shivom" className="w-full h-72 object-cover" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About MBA Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Master of Business Administration (MBA) program at Shivom Colleges is a comprehensive, industry-oriented postgraduate course designed to prepare future leaders and decision-makers in the business world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The curriculum covers Marketing, Finance, Human Resource Management, Operations, International Business, Business Analytics, and Entrepreneurship with a strong emphasis on practical exposure through case studies, internships, and industry interactions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The program nurtures innovation, leadership, ethical business practices, and effective communication to prepare graduates for managerial roles in corporate, startup, and government sectors.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Program Highlights</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Advanced business management and strategic planning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Global business perspective and international case studies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Leadership development programs and executive coaching</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Industry collaborations and guest lectures</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Consulting projects with real companies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">International exchange and study tours</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {['Finance & Investment', 'Marketing Management', 'Business Analytics', 'Entrepreneurship', 'International Business', 'Supply Chain Management'].map((spec) => (
              <div key={spec} className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="text-gray-900 font-semibold">{spec}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Admission Requirements</h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>• Bachelor's degree from a recognized university</li>
            <li>• Entrance exam score (CAT/MAT/GMAT or equivalent)</li>
            <li>• Work experience preferred (typically 2-3 years)</li>
            <li>• Strong academic background</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Career Progression</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            MBA graduates are prepared for senior management roles including General Manager, Strategic Manager, Business Analyst, Management Consultant, and Entrepreneur. Our alumni hold positions in Fortune 500 companies, startups, and government organizations.
          </p>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <Link href="/admission/key-dates" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Apply for MBA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
