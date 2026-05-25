import Link from 'next/link';

export default function ComputerLabPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Computer Laboratory</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg">State-of-the-Art Computing Facilities</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Laboratory Infrastructure</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shivom's computer laboratories are equipped with modern systems and software to provide hands-on experience in programming, software development, database management, and networking.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
            <img src="/media/8.jpg" alt="Shivom Computer Laboratory" className="w-full h-80 object-cover" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hardware Infrastructure</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>High-Performance Systems:</strong> Over 100 modern desktop computers with latest processors and RAM</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Servers:</strong> Dedicated database and application servers for practice and learning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Networking Equipment:</strong> Network switches, routers, and firewalls for network lab</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700"><strong>Printers & Peripherals:</strong> Laser printers and necessary peripherals</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Software & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { category: 'Programming', tools: 'Java, Python, C++, C#, JavaScript' },
              { category: 'Databases', tools: 'MySQL, Oracle, SQL Server, MongoDB' },
              { category: 'Web Technologies', tools: 'HTML, CSS, React, Angular, Node.js' },
              { category: 'Development Tools', tools: 'VS Code, Eclipse, Visual Studio, Git' },
              { category: 'Cloud Platforms', tools: 'AWS, Microsoft Azure' },
              { category: 'Security Tools', tools: 'Wireshark, Metasploit, Burp Suite' },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold text-gray-900">{item.category}</p>
                <p className="text-gray-600 text-sm">{item.tools}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Lab Facilities</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Air-conditioned environment for comfortable learning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">High-speed Internet connectivity (100 Mbps)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">UPS and power backup for uninterrupted operation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">24/7 lab access for additional practice and projects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Trained lab technicians for technical support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Regular maintenance and software updates</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Lab Activities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Students conduct practical experiments in:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8 list-disc list-inside">
            <li>Programming and data structures</li>
            <li>Database design and management</li>
            <li>Web application development</li>
            <li>Software testing and quality assurance</li>
            <li>Network administration and security</li>
            <li>Cloud computing and deployment</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="font-semibold text-gray-900 mb-2">Lab Access Policy</h3>
            <p className="text-gray-700">All students get individual login credentials and can access the labs during scheduled hours and for self-study. Lab hours and schedules are posted in the computer science department.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
