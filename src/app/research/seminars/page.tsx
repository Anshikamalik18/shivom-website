import Link from 'next/link';

export default function SeminarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academic Seminars</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Knowledge Sharing and Interactive Learning Sessions</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Seminar Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom MBA College organizes regular seminars featuring industry experts, academicians, and thought leaders. These sessions provide platforms for students and faculty to engage with contemporary business and technology topics.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Types of Seminars</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Industry Expert Seminars',
                description: 'Insights from business leaders and practitioners',
              },
              {
                title: 'Faculty Seminars',
                description: 'Research presentations by our faculty members',
              },
              {
                title: 'Student Research Seminars',
                description: 'Presentations by students on their research projects',
              },
              {
                title: 'Guest Lecture Series',
                description: 'Specialized topics from visiting scholars',
              },
              {
                title: 'Technical Workshops',
                description: 'Hands-on training on emerging technologies',
              },
            ].map((seminar, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900">{seminar.title}</p>
                <p className="text-gray-700 text-sm">{seminar.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Recent Seminars</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                topic: 'Digital Marketing in the Age of AI',
                speaker: 'Dr. Rajesh Kumar, Tech Marketing Expert',
                date: 'March 10, 2024',
              },
              {
                topic: 'Entrepreneurship & Startup Ecosystem',
                speaker: 'Ms. Priya Sharma, Startup Founder & Mentor',
                date: 'February 28, 2024',
              },
              {
                topic: 'Supply Chain Management 4.0',
                speaker: 'Mr. Arun Patel, Supply Chain Director',
                date: 'February 15, 2024',
              },
            ].map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">{item.topic}</p>
                <p className="text-gray-600 text-sm mt-1"><strong>Speaker:</strong> {item.speaker}</p>
                <p className="text-blue-600 text-sm"><strong>Date:</strong> {item.date}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Learning Outcomes</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Exposure to industry best practices and trends</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Direct interaction with experts and leaders</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Networking opportunities with professionals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Practical knowledge beyond textbooks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Career guidance and mentoring</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Skill enhancement in specific domains</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Frequency</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2"><strong>Weekly Seminars:</strong> At least one industry or expert seminar per week</p>
            <p className="text-gray-700"><strong>Monthly Programs:</strong> Specialized workshops and technical sessions</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Participation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            All students are encouraged to attend seminars as part of their academic development. Faculty members can also present their research in our seminar series. Student organizations frequently host specialized seminars on topics relevant to their programs.
          </p>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <p className="text-gray-900 font-semibold">Interested in Presenting?</p>
            <p className="text-gray-700 mt-2">Faculty and students who wish to present in our seminar series should contact the Academic Affairs Office with their topic and brief outline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
