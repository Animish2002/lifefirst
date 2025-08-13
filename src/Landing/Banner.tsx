import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const TopBanner = () => {
    
  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "info@lifefirsttech.com",
      href: "mailto:info@lifefirsttech.com",
      type: "email",
    },
    {
      icon: <Phone size={16} />,
      text: "+91 (XXX) XXX-XXXX",
      href: "tel:+91XXXXXXXXXX",
      type: "phone",
    },
    {
      icon: <Clock size={16} />,
      text: "Mon-Fri 9AM-5PM IST",
      href: null,
      type: "hours",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com/lifefirsttech",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com/lifefirsttech",
      label: "Twitter",
      color: "hover:text-sky-500",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/company/lifefirsttech",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com/lifefirsttech",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube size={18} />,
      href: "https://youtube.com/lifefirsttech",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];
  return (
    <div className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left Side - Contact Information */}
          <div className="flex items-center space-x-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="text-slate-400">{item.icon}</span>
                    <span className="hidden sm:inline">{item.text}</span>
                  </a>
                ) : (
                  <div className="flex items-center space-x-2 text-slate-300 text-sm">
                    <span className="text-slate-400">{item.icon}</span>
                    <span className="hidden sm:inline">{item.text}</span>
                  </div>
                )}
                {index < contactInfo.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-4 mx-4 bg-slate-700 hidden lg:block"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center space-x-1">
            <span className="text-slate-400 text-sm mr-3 hidden md:inline">
              Follow us:
            </span>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`h-8 w-8 p-0 text-slate-400 hover:bg-slate-800 transition-all duration-200 ${social.color}`}
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
