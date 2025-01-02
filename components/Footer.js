import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const SciFiFooter = () => {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 bottom-0">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-radial from-cyan-500/20 via-indigo-500/10 to-black opacity-70"></div>
      </div>

      {/* Top Section: Branding and Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/levizr_logo_sky.png"
                alt="Brand Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h2 className="text-2xl font-bold tracking-widest">Image Generator</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Your portal to the cosmos. Explore endless possibilities in the realm of sci-fi, tech, and imagination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400">Gallery</a></li>
              <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400">
              <strong>Email:</strong> support@scifiuniverse.com
            </p>
            <p className="text-sm text-gray-400">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-6">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <p className="text-sm text-gray-400">
            &copy; 2024 Levizr Image Generator. All rights reserved.
          </p>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
