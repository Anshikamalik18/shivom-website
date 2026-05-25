import Link from 'next/link';
import { Download } from 'lucide-react';

export default function ProspectusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Admission Prospectus</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Complete Information About Our Programs and Admission Process</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Download Prospectus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { program: 'General Prospectus', file: '/docs/application-form.pdf', label: 'Download General Prospectus' },
              { program: 'MBA Admission Form', file: '/docs/application-form-mba.pdf', label: 'Download MBA Application Form' },
            ].map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.program}</h3>
                <a href={item.file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 font-semibold transition duration-200">
                  <Download size={20} />
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">What's Inside the Prospectus</h2>
          <div className="space-y-4 mb-8">
            {[
              'About Shivom MBA College - Vision, Mission, and History',
              'Program Overview - Curriculum, Specializations, and Course Structure',
              'Eligibility Criteria and Admission Requirements',
              'Application Process and Important Dates',
              'Fee Structure and Financial Aid Information',
              'Faculty Information and Industry Connections',
              'Facilities and Infrastructure',
              'Placements and Alumni Success Stories',
              'Hostel and On-Campus Life',
              'Contact Information and Admission Cell Details',
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">Key Information</h2>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility at a Glance</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-blue-900">BBA:</p>
                <p className="text-gray-700">12th pass with minimum 45% aggregate (40% for SC/ST)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-900">MBA:</p>
                <p className="text-gray-700">Bachelor's degree with minimum 50% aggregate (45% for SC/ST)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-900">BCA:</p>
                <p className="text-gray-700">12th pass with Mathematics and minimum 45% aggregate</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Download Application Forms</h2>
            <div className="space-y-4">
              <a href="/docs/application-form.pdf" target="_blank" rel="noreferrer" className="block rounded-lg border border-gray-200 p-4 hover:border-blue-600 transition duration-200">
                <p className="font-semibold text-blue-900">General Application Form</p>
                <p className="text-gray-700">Complete the general application to apply for BBA, BCA, and MBA programs.</p>
              </a>
              <a href="/docs/application-form-mba.pdf" target="_blank" rel="noreferrer" className="block rounded-lg border border-gray-200 p-4 hover:border-blue-600 transition duration-200">
                <p className="font-semibold text-blue-900">MBA Application Form</p>
                <p className="text-gray-700">Download the MBA-specific application form for postgraduate admissions.</p>
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fee Structure</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Detailed fee structure for each program including tuition fees, examination fees, hostel charges, and other miscellaneous expenses is provided in the prospectus. We offer various scholarships based on academic merit and financial need.
          </p>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scholarships Available</h3>
            <p className="text-gray-700">Merit-based scholarships, Need-based financial aid, Sports scholarships, and SC/ST reserved scholarships are available for deserving students.</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about the prospectus or need more information, please contact our admission cell:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> admissions@shivomcollege.in</p>
            <p><strong>Phone:</strong> +91 8901459200</p>
            <p><strong>Office Hours:</strong> Monday to Saturday, 9 AM to 5 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
