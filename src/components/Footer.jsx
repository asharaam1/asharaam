import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-darkBg py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Portfolio
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A passionate developer focused on creating interactive and responsive web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span> lohanaasharaam1@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Location:</span> Garden West, Karachi, Pakistan
              </li>
              <li className="flex space-x-4 mt-4">
                {/* Social Media Icons */}
                <a href="https://github.com/asharaam1" target="_blank" rel="noopener noreferrer"
                  aria-label="GitHub Profile" title="GitHub Profile">
                  <FiGithub className="text-xl 
                  text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/asharaam1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn Profile">
                  <FiLinkedin className="text-xl 
                  text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" />
                </a>
                <a href="https://x.com/asharaam123" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" title="Twitter Profile">
                  <FiTwitter className="text-xl 
                  text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Asha Ram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;