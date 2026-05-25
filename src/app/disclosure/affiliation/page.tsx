import Link from 'next/link';

export default function AffiliationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Affiliation & Recognition</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Official Accreditation and Institutional Recognition</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Accreditation Details</h2>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">University Affiliation</h3>
            <p className="text-gray-700 mb-2"><strong>Affiliated to:</strong> Maharishi Dayanand University, Rohtak</p>
            <p className="text-gray-700 mb-2"><strong>Affiliation ID:</strong> Available on official affiliation letter</p>
            <p className="text-gray-700"><strong>Status:</strong> Active and in Good Standing</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AICTE Approval</h3>
            <p className="text-gray-700 mb-2"><strong>AICTE Approval Letter:</strong> Available</p>
            <p className="text-gray-700 mb-2"><strong>Validity Period:</strong> Current AICTE approval cycle</p>
            <p className="text-gray-700 mb-4">All programs offered by Shivom MBA College are duly approved by the All India Council for Technical Education (AICTE).</p>
            <Link href="/docs/SCMT-Mandatory-Disclosures.pdf" className="text-blue-600 font-semibold hover:text-blue-900" target="_blank">
              Download AICTE Approval Letter (PDF)
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Recognition & Awards</h2>
          <div className="space-y-4 mb-8">
            {[
              'ISO 9001:2015 Certified Institution',
              'Recognized for Academic Excellence',
              'Best College Award - Recent Year',
              'Industry-Academia Collaboration Award',
              'Best Placement Record Award',
              'Social Responsibility Recognition',
            ].map((award, index) => (
              <div key={index} className="flex gap-3 items-start">
                <span className="text-gold-500 font-bold mt-1">★</span>
                <span className="text-gray-700">{award}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Compliance & Governance</h2>
          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-blue-600 pl-4 py-3">
              <p className="font-semibold text-gray-900">Regulatory Compliance</p>
              <p className="text-gray-700 text-sm">All statutory requirements and regulatory compliance as per government norms are maintained.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-3">
              <p className="font-semibold text-gray-900">Academic Standards</p>
              <p className="text-gray-700 text-sm">We maintain highest academic standards and follow quality assurance protocols.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-3">
              <p className="font-semibold text-gray-900">Financial Transparency</p>
              <p className="text-gray-700 text-sm">Annual audit and financial statements are maintained and made available.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Important Documents</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Download Official Documents:</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">Affiliation Letter from University</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">AICTE Approval Certificate</span>
              </div>
              <a href="/docs/SCMT-Mandatory-Disclosures.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">Mandatory Disclosures Document</span>
              </a>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">ISO Certification</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-blue-600 transition duration-200">
                <span className="text-blue-600 text-xl">📄</span>
                <span className="text-gray-700">Governing Body Details</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700"><strong>Note:</strong> For detailed information about accreditation and recognition, please contact the Administrative Office.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
