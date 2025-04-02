"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white px-6 md:px-12 py-10 border-t "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <img src="/images/foot.png" alt="Yuvabe Education" className="w-70 mb-12" /> 
          <div className="mt-6 space-y-6 text-gray-700"> 
            <p className="flex items-center space-x-2">
              <IoMailSharp className="text-lg text-black" />
              <span>info@yuvabe.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaGlobe className="text-lg text-black" />
              <Link href="https://www.yuvabe.com" className="hover:underline">
                www.yuvabe.com
              </Link>
            </p>
            <p className="flex items-center space-x-2">
              <IoLocationSharp className="text-lg text-black" />
              <span>Yuvabe, Saracon Campus, Auroville, Tamil Nadu - 605101</span>
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-12 text-[#592AC7]">
            <Link href="https://instagram.com">
              <FaInstagram size={24} className="hover:text-gray-600 transition" />
            </Link>
            <Link href="https://facebook.com">
              <FaFacebookF size={24} className="hover:text-gray-600 transition" />
            </Link>
            <Link href="https://twitter.com">
              <FaXTwitter size={24} className="hover:text-gray-600 transition" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedinIn size={24} className="hover:text-gray-600 transition" />
            </Link>
            <Link href="https://youtube.com">
              <FaYoutube size={24} className="hover:text-gray-600 transition" />
            </Link>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/about" className="hover:underline">Who We Are?</Link>
              </li>
              <li>
                <Link href="/impact" className="hover:underline">Our Impact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Programs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/steam-program" className="hover:underline">STEAM Program</Link>
              </li>
              <li>
                <Link href="/bridge-program" className="hover:underline">Bridge Program</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/blogs" className="hover:underline">Blogs</Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:underline">Newsletter</Link>
              </li>
              <li>
                <Link href="/impact-report" className="hover:underline">Impact Report</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/join-us" className="hover:underline">Join Us</Link>
              </li>
              <li>
                <Link href="/support-us" className="hover:underline">Support Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Talk to Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
     <div className="mt-10 border-t pt-4 text-center text-gray-500">
  Copyright &copy; {new Date().getFullYear()} Yuvabe Education | All rights reserved.
</div>

    </motion.footer>
  );
};

export default Footer;
