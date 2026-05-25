import Link from 'next/link';

export default function BCAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bachelor of Computer Applications (BCA)</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">3-Year Full-Time Undergraduate Program</p>
          <div className="mt-8 rounded-3xl overflow-hidden shadow-lg">
            <img src="/media/bca-hero.jpg" alt="BCA program at Shivom" className="w-full h-72 object-cover" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About BCA Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Bachelor of Computer Applications (BCA) at Shivom Colleges is a three-year undergraduate program designed for students aspiring to build successful careers in information technology and computer applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The curriculum covers programming languages, database management, web development, computer networks, software engineering, and emerging fields such as cloud computing, artificial intelligence, and cybersecurity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The program emphasizes both classroom learning and practical training through project work, internships, coding workshops, and industry interaction to ensure students are technically proficient and industry-ready.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Core Competencies</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Programming languages (Java, Python, C++, Web Development)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Database management and SQL</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Web application development and frameworks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Software engineering and project management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Data structures and algorithms</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Emerging technologies (AI, ML, Cloud Computing)</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Specialization Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {['Web Development', 'Mobile App Development', 'Data Analytics', 'Cloud Computing', 'Cybersecurity', 'AI & Machine Learning'].map((track) => (
              <div key={track} className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="text-gray-900 font-semibold">{track}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Laboratory Facilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our state-of-the-art computer labs are equipped with high-performance systems, latest software tools, and development environments. Students have access to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>• Modern programming and development environments</li>
            <li>• Database servers and management systems</li>
            <li>• Cloud computing platforms (AWS, Azure)</li>
            <li>• Cybersecurity and network testing tools</li>
            <li>• 24/7 lab access for focused learning</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Career Opportunities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            BCA graduates find placements as Software Developers, Web Developers, Database Administrators, System Administrators, IT Consultants, and more. Our placement partners include leading IT companies like TCS, Infosys, Wipro, HCL, and emerging tech startups.
          </p>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <Link href="/admission/key-dates" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Apply for BCA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
