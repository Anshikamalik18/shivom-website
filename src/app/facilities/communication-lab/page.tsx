import Link from 'next/link';

export default function CommunicationLabPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Communication Laboratory</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">Dedicated Space for Developing Professional Communication Skills</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Communication is a critical skill for success in any profession. Shivom's Communication Lab is specially designed to help students develop effective verbal, written, and presentation skills in a supportive environment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Lab Facilities</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Audio-Visual Equipment:</strong> Projectors, screens, and sound systems for presentations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Recording Studio:</strong> Professional-grade recording equipment for video projects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Seminar Hall:</strong> Spacious auditorium for group discussions and mock interviews</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Practice Rooms:</strong> Individual and group practice spaces</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Library:</strong> Collection of communication books, journals, and online resources</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Programs & Activities</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                title: 'English Communication Workshops',
                description: 'Regular workshops on grammar, vocabulary, and everyday communication',
              },
              {
                title: 'Presentation Skills Training',
                description: 'Techniques for effective presentations and public speaking',
              },
              {
                title: 'Interview Preparation',
                description: 'Mock interviews and guidance for campus placements',
              },
              {
                title: 'Business Writing',
                description: 'Training in professional letter writing, reports, and proposals',
              },
              {
                title: 'Group Discussions',
                description: 'Practice in team communication and group decision-making',
              },
              {
                title: 'Soft Skills Development',
                description: 'Programs focusing on personality development and professional etiquette',
              },
            ].map((program, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-blue-900">{program.title}</p>
                <p className="text-gray-700 text-sm">{program.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Trained Instructors</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The lab is managed by experienced communication experts with backgrounds in media, journalism, corporate training, and public relations. They provide personalized guidance to help students overcome communication barriers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Student Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Improved public speaking confidence',
              'Professional presentation skills',
              'Better interview performance',
              'Enhanced group discussion skills',
              'Correct English pronunciation',
              'Strong written communication',
              'Professional networking abilities',
              'Leadership development',
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Lab Hours</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2"><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM (with scheduled sessions)</p>
            <p className="text-gray-700"><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
            <p className="text-gray-700 text-sm mt-4">Students can book slots in advance for personalized coaching and practice sessions.</p>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <p className="text-gray-900 font-semibold">Tip:</p>
            <p className="text-gray-700 mt-2">Regular participation in communication lab programs significantly enhances placement success and professional career advancement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
