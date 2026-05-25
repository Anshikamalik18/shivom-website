import Link from 'next/link';

export default function AICtePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AICTE Approval Letter</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">All India Council for Technical Education Certification</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">AICTE Recognition</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom MBA College holds valid approval from the All India Council for Technical Education (AICTE), the statutory body responsible for accrediting technical education institutions in India. This approval certifies that all our programs meet the standards set by AICTE.
          </p>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Current AICTE Status</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Institution Code:</strong> Available in AICTE documentation</p>
              <p><strong>Approval Valid Till:</strong> Current approval cycle</p>
              <p><strong>Status:</strong> Approved and Active</p>
              <p><strong>Programs Approved:</strong> BBA, MBA, BCA</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Programs with AICTE Approval</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                program: 'BBA (Bachelor of Business Administration)',
                duration: '3 Years',
                seats: '60',
              },
              {
                program: 'MBA (Master of Business Administration)',
                duration: '2 Years',
                seats: '60',
              },
              {
                program: 'BCA (Bachelor of Computer Applications)',
                duration: '3 Years',
                seats: '60',
              },
            ].map((prog, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-blue-900 text-lg">{prog.program}</p>
                <div className="flex gap-8 mt-2 text-gray-700">
                  <p><strong>Duration:</strong> {prog.duration}</p>
                  <p><strong>Approved Intake:</strong> {prog.seats} students</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Benefits of AICTE Approval</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>National Recognition:</strong> Degrees are recognized across India and internationally</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Quality Assurance:</strong> Programs meet national standards for technical education</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Alumni Advantage:</strong> Graduates get recognized credentials for jobs and further studies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Regulatory Compliance:</strong> Ensures compliance with national education policies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Faculty Standards:</strong> Prescribes minimum qualifications for teaching staff</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Infrastructure Requirements:</strong> Ensures adequate facilities and resources</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">AICTE Approval Process</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            AICTE conducts periodic reviews and inspections to ensure institutions maintain prescribed standards. Our college regularly undergoes:
          </p>
          <div className="space-y-3 mb-8">
            {[
              'Academic quality audits',
              'Infrastructure and facility inspections',
              'Faculty qualification verification',
              'Student placement tracking',
              'Research and innovation assessment',
              'Compliance verification with statutory requirements',
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Download AICTE Certificate</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <a href="/docs/LOA-2023-2024.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              📥 Download AICTE Approval Letter (PDF)
            </a>
            <p className="text-gray-700 text-sm mt-4">For any queries regarding AICTE approval, please contact the Academic Affairs Office.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
