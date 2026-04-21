import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { href: "#", label: "Facebook", icon: FaFacebookF, color: "text-[#1877F2]" },
  { href: "#", label: "Instagram", icon: FaInstagram, color: "text-[#E4405F]" },
  { href: "#", label: "Twitter", icon: FaTwitter, color: "text-[#1DA1F2]" },
  {
    href: "#",
    label: "Pinterest",
    icon: FaPinterestP,
    color: "text-[#E60023]",
  },
  { href: "#", label: "YouTube", icon: FaYoutube, color: "text-[#FF0000]" },
];

function FloatingSocialSidebar() {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col gap-3">
      {socialLinks.map(({ href, label, icon: Icon, color }) => (
        <a
          key={label}
          href={href}
          className="group flex h-12 w-12 items-center overflow-hidden rounded-l-full bg-slate-950/95 px-2 text-slate-100 shadow-lg shadow-slate-900/30 transition-all duration-300 hover:w-52 hover:bg-slate-900/95"
        >
          <span
            className={`flex h-12 w-12 items-center justify-center ${color}`}
          >
            <Icon size={30} />
          </span>
          <span className="ml-3 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default FloatingSocialSidebar;
