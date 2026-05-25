import Link from 'next/link';

export default function KeyDatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Admission - Key Dates</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Important dates for Admission Process 2024-25</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">BBA Program</h2>
          <div className="space-y-4 mb-8">
            {[
              { date: 'June 1, 2024', event: 'Application Portal Opens' },
              { date: 'August 15, 2024', event: 'Last Date for Application Submission' },
              { date: 'August 20, 2024', event: 'Merit List Declaration' },
              { date: 'August 25-27, 2024', event: 'Counselling Session' },
              { date: 'September 1, 2024', event: 'Classes Begin' },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900 text-lg">{item.date}</p>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-8 mt-12">MBA Program</h2>
          <div className="space-y-4 mb-8">
            {[
              { date: 'April 1, 2024', event: 'Application Portal Opens' },
              { date: 'May 31, 2024', event: 'Last Date for Application Submission' },
              { date: 'June 10, 2024', event: 'Entrance Exam (CAT/MAT/GMAT Score Valid)' },
              { date: 'June 20, 2024', event: 'Shortlist for Interview' },
              { date: 'June 25 - July 5, 2024', event: 'Personal Interview & GD Rounds' },
              { date: 'July 10, 2024', event: 'Final Merit List' },
              { date: 'July 15, 2024', event: 'Classes Begin' },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900 text-lg">{item.date}</p>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-8 mt-12">BCA Program</h2>
          <div className="space-y-4 mb-8">
            {[
              { date: 'July 1, 2024', event: 'Application Portal Opens' },
              { date: 'September 10, 2024', event: 'Last Date for Application Submission' },
              { date: 'September 15, 2024', event: 'Entrance Test (if applicable)' },
              { date: 'September 20, 2024', event: 'Merit List Declaration' },
              { date: 'September 22-24, 2024', event: 'Counselling' },
              { date: 'October 1, 2024', event: 'Classes Begin' },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900 text-lg">{item.date}</p>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Apply</h3>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Visit our admission portal</li>
              <li>Fill in the application form with required information</li>
              <li>Upload required documents and photograph</li>
              <li>Pay the application fee</li>
              <li>Submit the application and save your login credentials</li>
              <li>You will receive a confirmation email with your application ID</li>
            </ol>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <p className="text-gray-900 font-semibold">Note:</p>
            <p className="text-gray-700 mt-2">Please check back regularly for any updates to these dates. We will notify all applicants of any changes through email and our website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
