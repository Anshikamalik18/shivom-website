import Link from 'next/link';

export default function DirectorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Director's Message</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg mb-4">Shivom MBA College</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 leading-relaxed">
              It is with great pride that I welcome you to Shivom MBA College, where excellence in education meets real-world application.
            </p>

            <p className="mb-6 leading-relaxed">
              As Director, I oversee our institution's academic programs, ensuring that we maintain the highest standards of teaching and learning. Our faculty members are not just educators but mentors who guide students through their journey of intellectual and personal growth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Academic Excellence</h3>
            <p className="mb-6 leading-relaxed">
              We believe in a curriculum that balances theoretical knowledge with practical skills. Our programs are designed in consultation with industry experts to ensure that our graduates are job-ready and capable of addressing real-world challenges.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Student Development</h3>
            <p className="mb-6 leading-relaxed">
              Beyond academics, we focus on the holistic development of our students. We encourage participation in co-curricular activities, research projects, and community service initiatives that shape them into well-rounded individuals.
            </p>

            <p className="mb-6 leading-relaxed">
              Our placement cell works tirelessly to connect our graduates with leading organizations, ensuring excellent career opportunities. We are proud of our alumni network and their contributions across various industries.
            </p>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="font-semibold text-gray-900">Best wishes,</p>
              <p className="text-lg text-blue-900 font-bold">Mr. Vikas Rathee<br />Director, Shivom College of Management and Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
