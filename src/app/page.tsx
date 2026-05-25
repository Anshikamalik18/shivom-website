import Link from 'next/link';
import { BookOpen, Users, Award, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Securing a Brighter Future with Shivom Institute of Management and Technology
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Approved by UGC, affiliated to Maharishi Dayanand University, Rohtak and accredited with Grade ‘A+’ by NAAC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admission/key-dates"
                  className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
                >
                  Apply Now
                </Link>
                <Link
                  href="/about/principal"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-3xl overflow-hidden h-96 shadow-xl">
                <img
                  src="/media/Banner2-1.webp"
                  alt="Shivom campus overview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/50 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-blue-100 text-lg font-semibold">UGC Approved • NAAC A+ • MDU Affiliated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality Education',
                description: 'Industry-focused curriculum with experienced faculty',
              },
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Learn from experienced professionals and academics',
              },
              {
                icon: Zap,
                title: 'Modern Facilities',
                description: 'State-of-the-art labs and infrastructure',
              },
              {
                icon: BookOpen,
                title: 'Career Support',
                description: 'Comprehensive placements and career guidance',
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition duration-200">
                  <IconComponent size={40} className="text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Placement Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-3xl shadow-sm flex items-center justify-center">
                <img
                  src={`/media/placement-${index}.png`}
                  alt={`Placement partner ${index}`}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Campus Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="overflow-hidden rounded-3xl shadow-lg">
                <img src={`/media/${index}.jpg`} alt={`Campus photo ${index}`} className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'BBA',
                description: 'Bachelor of Business Administration',
                details: 'Comprehensive business education with focus on management and entrepreneurship',
                link: '/courses/bba',
              },
              {
                name: 'MBA',
                description: 'Master of Business Administration',
                details: 'Advanced management education for career advancement and leadership',
                link: '/courses/mba',
              },
              {
                name: 'BCA',
                description: 'Bachelor of Computer Applications',
                details: 'In-depth computer science and programming education',
                link: '/courses/bca',
              },
            ].map((program, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition duration-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{program.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{program.description}</p>
                <p className="text-gray-600 mb-6">{program.details}</p>
                <Link
                  href={program.link}
                  className="text-blue-600 font-semibold hover:text-blue-900 transition duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Good Education is a Foundation for a Better Future
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Shivom College of Management and Technology (approved by UGC, affiliated to Maharishi Dayanand University, Rohtak and accredited with Grade ‘A+’ by NAAC) is committed to imparting high-quality management education with a strong emphasis on academic rigor and practical relevance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We nurture future business leaders by fostering intellectual growth, analytical thinking, and ethical business practices along with extracurricular engagement through sports, seminars, and corporate interface programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our infrastructure supports modern classrooms, advanced learning tools, and a conducive environment for research and innovation.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry-Aligned Courses</h3>
                <p className="text-gray-700">
                  Programs designed to prepare students for real-world business and technology careers.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Student Development</h3>
                <p className="text-gray-700">
                  Emphasis on leadership, communication, teamwork, and analytical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Library', link: '/facilities/library' },
              { name: 'Hostel', link: '/facilities/hostel' },
              { name: 'Computer Lab', link: '/facilities/computer-lab' },
              { name: 'Communication Lab', link: '/facilities/communication-lab' },
            ].map((facility, index) => (
              <Link
                key={index}
                href={facility.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200 text-center hover:bg-blue-50"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h4>
                <p className="text-blue-600 text-sm">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us and become part of a community dedicated to excellence and innovation
          </p>
          <Link
            href="/admission/key-dates"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
          >
            Check Admission Details
          </Link>
        </div>
      </section>
    </div>
  );
}
