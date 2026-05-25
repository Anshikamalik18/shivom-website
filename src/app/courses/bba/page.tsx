import Link from 'next/link';

export default function BBAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bachelor of Business Administration (BBA)</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">3-Year Full-Time Undergraduate Program</p>
          <div className="mt-8 rounded-3xl overflow-hidden shadow-lg">
            <img src="/media/bba-hero.jpg" alt="BBA program at Shivom" className="w-full h-72 object-cover" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About BBA Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom Institute of Management and Technology offers a dynamic Bachelor of Business Administration (BBA) program available in three formats: 3-year BBA, 4-year BBA Honours, and 4-year BBA with Research.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The program provides students with a strong foundation in business principles, practical management skills, and industry exposure to confidently navigate business operations and strategic decision-making.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Students gain analytical thinking, leadership, interpersonal skills, and problem-solving capabilities that prepare them for careers across sectors or advanced studies.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Industry-relevant curriculum covering core business areas</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Experienced faculty with academic and industry expertise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Practical projects and case study analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Internship opportunities with leading companies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Skill development in soft skills and communication</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {['Finance', 'Marketing', 'Human Resources', 'Operations'].map((spec) => (
              <div key={spec} className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="text-gray-900 font-semibold">{spec}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Career Opportunities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            BBA graduates from Shivom are placed in leading organizations across sectors including banking, finance, consulting, retail, IT, and e-commerce. Our placement record demonstrates the quality of education and industry acceptance.
          </p>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <Link href="/admission/key-dates" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Apply for BBA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
