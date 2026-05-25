'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shivom College of Management and Technology</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Approved by UGC and affiliated to Maharishi Dayanand University, Rohtak. Accredited with Grade ‘A+’ by NAAC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/principal" className="text-gray-300 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses/bba" className="text-gray-300 hover:text-white transition duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">College Location Address</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">+91 8901459200</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">info@shivommbacollege.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shivom MBA College. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
