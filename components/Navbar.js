"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { customLoader } from "@/app/utils/customLoder";

export const SciFiNavbar = ({ session }) => {
  console.log(session);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black top-0 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
          loader={customLoader}
            src="/levizr_logo_sky.png"
            alt="Sci-Fi Universe Logo"
            width={85}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold tracking-widest">
            <Link href="/">Image Generator</Link>
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <Link href="/gallery" className="hover:text-cyan-400 transition">
            Gallery
          </Link>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
        {/* Get started button */}
        {session ? (
          <Link href={"/myaccount"} className="lig-user-profile flex items-center">
            <img
              src={session.user.profile || "/default-profile.png"} // Fallback image
              alt={`${session.user.username}` || "User"}
              className="rounded-full w-8 h-8 mx-2"
            />
            <span className="ml-2 nav-btn">{session.user.username || "User"}</span>
          </Link>
        ) : (
          <Link href={"/getstarted"}>
            <button className={`lig-iconic-button lig-get nav-btn`}>
              <svg
                className="lig-button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6l-3 5h6l-3 5" />
              </svg>
              Get Started
            </button>
          </Link>
        )}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="focus:outline-none text-cyan-500"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t flex flex-col justify-center">
          <div className="space-y-4 py-4 px-6">
            <Link
              href="/"
              className="block hover:text-cyan-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="block hover:text-cyan-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="block hover:text-cyan-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:text-cyan-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Get started button */}
            <Link href={"/getstarted"}>
              <button className={`lig-iconic-button w-1/2 nav-btn-mob my-4 mx-auto`}>
                <svg
                  className="lig-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6l-3 5h6l-3 5" />
                </svg>
                Get Started
              </button>
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
};
