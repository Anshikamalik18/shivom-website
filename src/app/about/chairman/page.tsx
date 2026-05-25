import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function ChairmanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chairman's Message</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg mb-4">Shivom Institute of Management and Technology</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 leading-relaxed">
              Welcome to Shivom MBA College, an institution dedicated to fostering academic excellence and professional development.
            </p>

            <p className="mb-6 leading-relaxed">
              At Shivom, we believe in transforming young minds into visionary leaders and accomplished professionals. Our commitment extends beyond classroom teaching to creating a holistic learning environment that nurtures critical thinking, innovation, and ethical values.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Vision</h3>
            <p className="mb-6 leading-relaxed">
              To be a globally recognized institution providing quality education that empowers students to become responsible citizens and industry leaders.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h3>
            <p className="mb-6 leading-relaxed">
              We are committed to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Providing industry-relevant, world-class education</li>
              <li>Developing critical thinking and leadership skills</li>
              <li>Fostering a culture of innovation and research</li>
              <li>Building ethical and socially responsible individuals</li>
              <li>Ensuring excellent career prospects for our students</li>
            </ul>

            <p className="mb-6 leading-relaxed">
              We invite you to join us on this journey of transformation and excellence. Together, let's create a brighter future.
            </p>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="font-semibold text-gray-900">Warm regards,</p>
              <p className="text-lg text-blue-900 font-bold">Chairman, Shivom MBA College</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
