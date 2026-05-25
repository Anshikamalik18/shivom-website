import Link from 'next/link';

export default function LecturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Invited Lectures</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Distinguished Guest Lectures and Specialized Topics</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Invited Lectures</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom MBA College invites eminent academics, industry leaders, researchers, and thought leaders to deliver lectures on specialized and contemporary topics. These sessions enrich the learning environment and provide exposure to cutting-edge ideas and practices.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Categories of Invited Lectures</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                category: 'Industry Leadership Lectures',
                description: 'Insights from top executives and business leaders on business strategy and management',
              },
              {
                category: 'Research & Innovation Talks',
                description: 'Presentations by researchers on latest findings and technological innovations',
              },
              {
                category: 'Career Development Lectures',
                description: 'Guidance on career pathways and professional growth strategies',
              },
              {
                category: 'Specialist Technical Lectures',
                description: 'Deep-dive sessions on specialized technical and domain expertise',
              },
              {
                category: 'Soft Skills & Personality Development',
                description: 'Programs on communication, leadership, and professional excellence',
              },
            ].map((lecture, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900">{lecture.category}</p>
                <p className="text-gray-700 text-sm">{lecture.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Guest Lecturers (Past Sessions)</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                name: 'Dr. Vikram Singh',
                title: 'CEO, Tech Innovations Inc.',
                topic: 'Digital Transformation in Business',
              },
              {
                name: 'Prof. Anjali Desai',
                title: 'Research Scholar, Global University',
                topic: 'Emerging Trends in Data Science',
              },
              {
                name: 'Mr. Rohan Mehta',
                title: 'Founder, StartupHub',
                topic: 'Building Successful Ventures',
              },
              {
                name: 'Dr. Sanjana Patel',
                title: 'HR Director, Fortune 500 Company',
                topic: 'Human Resource Management Excellence',
              },
            ].map((lecturer, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">{lecturer.name}</p>
                <p className="text-blue-600 text-sm font-semibold">{lecturer.title}</p>
                <p className="text-gray-600 text-sm mt-1">Topic: {lecturer.topic}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Benefits for Students</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Learn from industry's best and brightest minds</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Exposure to real-world applications and case studies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Networking opportunities with accomplished professionals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Broader perspectives on career options and opportunities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Mentoring and guidance from industry experts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Enhanced awareness of industry trends and demands</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Session Format</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Invited lectures typically consist of:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8 list-disc list-inside">
            <li>Formal presentation by the guest lecturer (45-60 minutes)</li>
            <li>Interactive Q&A session with students and faculty</li>
            <li>Informal networking and one-on-one discussions</li>
            <li>Certificates of attendance for participants</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Upcoming Lectures 2025</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">Updated schedule of invited lectures will be published soon. Students can follow our website and email notifications for the latest information.</p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-900">
              Subscribe for Lecture Updates →
            </Link>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Interested in Inviting a Speaker?</h3>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <p className="text-gray-700">Student organizations, departments, and clubs can request invitations for prominent speakers. Please contact the Academic Affairs Office with your request including:</p>
            <ul className="text-gray-700 text-sm mt-3 list-disc list-inside space-y-1">
              <li>Suggested speaker profiles or names</li>
              <li>Preferred topics</li>
              <li>Proposed dates and times</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
