import Link from 'next/link';

export default function PrincipalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Principal's Message</h1>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-gray-600 text-lg mb-4">Shivom MBA College</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 leading-relaxed">
              Welcome to Shivom MBA College, where we believe education is the cornerstone of personal and professional success.
            </p>

            <p className="mb-6 leading-relaxed">
              As Principal, I am committed to maintaining an environment that fosters learning, creativity, and personal development. Our institution stands as a beacon of academic rigor combined with practical training, preparing students to excel in their chosen fields.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Quality Education</h3>
            <p className="mb-6 leading-relaxed">
              We are dedicated to providing quality education that meets international standards. Our faculty members bring both academic expertise and industry experience to the classroom, ensuring that students receive education that is both theoretically sound and practically relevant.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Infrastructure & Facilities</h3>
            <p className="mb-6 leading-relaxed">
              Shivom provides state-of-the-art infrastructure including modern computer labs, well-stocked library, comfortable hostels, and dedicated spaces for communication and research. These facilities are designed to support comprehensive student development.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Promise</h3>
            <p className="mb-6 leading-relaxed">
              We promise to nurture every student's potential, help them discover their strengths, and guide them toward becoming accomplished professionals and responsible citizens. We celebrate diversity and believe in inclusive education that welcomes students from all backgrounds.
            </p>

            <p className="mb-6 leading-relaxed">
              I invite you to become part of the Shivom family and embark on a transformative educational journey. Together, we will achieve excellence and create a positive impact on society.
            </p>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="font-semibold text-gray-900">With warm regards,</p>
              <p className="text-lg text-blue-900 font-bold">Dr. Bharat Bhushan<br />Principal, Shivom College of Management and Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
