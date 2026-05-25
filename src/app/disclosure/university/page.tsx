import Link from 'next/link';

export default function UniversityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">University Affiliation Letter</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Official Recognition and Affiliation Certificate</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">University Affiliation Details</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Affiliation Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Affiliated University:</strong> Maharishi Dayanand University, Rohtak</p>
              <p><strong>Affiliation Status:</strong> Active and Recognized</p>
              <p><strong>Affiliation Since:</strong> Since establishment</p>
              <p><strong>Affiliation ID:</strong> Available on official affiliation letter</p>
              <p><strong>Affiliation Letter Reference:</strong> Available on official affiliation letter</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What University Affiliation Means</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            University affiliation is a formal recognition that certifies Shivom MBA College as an educational institution authorized to teach and award degrees on behalf of the affiliating university. This affiliation ensures:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Degree Validity:</strong> Degrees awarded are recognized and valid nationwide</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Academic Standards:</strong> Curriculum follows university-prescribed standards</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Examination Authority:</strong> University conducts or supervises examinations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Quality Oversight:</strong> Regular inspections and reviews by university</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700"><strong>Regulatory Compliance:</strong> Adherence to university regulations and guidelines</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Affiliated Programs</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                program: 'Bachelor of Business Administration (BBA)',
                duration: '3 Years',
                affiliation: 'Full-time degree program',
              },
              {
                program: 'Master of Business Administration (MBA)',
                duration: '2 Years',
                affiliation: 'Full-time degree program',
              },
              {
                program: 'Bachelor of Computer Applications (BCA)',
                duration: '3 Years',
                affiliation: 'Full-time degree program',
              },
            ].map((prog, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-gray-900">{prog.program}</p>
                <p className="text-gray-600 text-sm"><strong>Duration:</strong> {prog.duration}</p>
                <p className="text-gray-600 text-sm"><strong>Type:</strong> {prog.affiliation}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Examination & Assessment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Under the affiliation system, the university maintains quality control through:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8 list-disc list-inside">
            <li>Regular curriculum updates and improvements</li>
            <li>University-conducted or supervised examinations</li>
            <li>Answer script evaluation and moderation</li>
            <li>Degree certificate issuance by the university</li>
            <li>Grade transcript validation and authentication</li>
            <li>Academic standards verification through inspections</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Student Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Recognized and valid degrees',
              'Degree evaluation for higher studies',
              'Job acceptance by employers',
              'International degree recognition',
              'Alumni association access',
              'Transcript verification support',
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Important Documents</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Download Official Documents:</h3>
            <div className="space-y-3">
              <a href="/docs/SCMT-Mandatory-Disclosures.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">University Affiliation Letter</span>
              </a>
              <a href="/docs/SCMT-Mandatory-Disclosures.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">Approved Course Curriculum</span>
              </a>
              <a href="/docs/SCMT-Mandatory-Disclosures.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">Academic Regulations</span>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">For more information about university affiliation or to verify our affiliation status, please visit the official website of Maharishi Dayanand University, Rohtak or contact our Academic Affairs Office.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
