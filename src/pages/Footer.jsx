import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-semibold text-white">
              Archees Gallery
            </div>
            <p className="max-w-md leading-7 text-slate-300">
              Discover curated gifts, toys, and stationery for every
              celebration. Enjoy a clean shopping experience with stylish finds
              for all ages.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h2>
            <div className="grid gap-3 text-slate-300">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <Link to="/toys" className="transition hover:text-white">
                Toys
              </Link>
              <Link to="/stationary" className="transition hover:text-white">
                Stationary
              </Link>
              <Link to="/gifts" className="transition hover:text-white">
                Gifts
              </Link>
              <Link to="/cart" className="transition hover:text-white">
                Cart
              </Link>
              <Link to="/adminlogin" className="transition hover:text-white">
                Admin
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">About Us</h2>
            <div className="grid gap-3 text-slate-300">
              <Link to="/about" className="transition hover:text-white">
                About Us
              </Link>
              <Link to="/terms" className="transition hover:text-white">
                Terms and Conditions
              </Link>
              <Link to="/cancellations" className="transition hover:text-white">
                Cancellations and Returns
              </Link>
              <Link to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">Contact</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <FaPhone className="text-red-500" size={18} />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" size={18} />
                <span>info@archeesgallery.com</span>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="transition hover:text-white"
                    title="Facebook"
                  >
                    <FaFacebookF className="text-[#1877F2]" size={30} />
                  </a>
                  <a
                    href="#"
                    className="transition hover:text-white"
                    title="Instagram"
                  >
                    <FaInstagram className="text-[#E4405F]" size={30} />
                  </a>
                  <a
                    href="#"
                    className="transition hover:text-white"
                    title="Twitter"
                  >
                    <FaTwitter className="text-[#1DA1F2]" size={30} />
                  </a>
                  <a
                    href="#"
                    className="transition hover:text-white"
                    title="Pinterest"
                  >
                    <FaPinterestP className="text-[#E60023]" size={30} />
                  </a>
                  <a
                    href="#"
                    className="transition hover:text-white"
                    title="YouTube"
                  >
                    <FaYoutube className="text-[#FF0000]" size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Archees Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
