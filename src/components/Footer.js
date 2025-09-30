import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Reservations', href: '#booking' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Yelp', icon: '⭐', href: '#' }
  ];

  const contactInfo = [
    { icon: '📍', text: '123 Main Street, Downtown District, NY 10001' },
    { icon: '📞', text: '(555) 123-4567' },
    { icon: '✉️', text: 'info@classicamerican.com' },
    { icon: '🕒', text: 'Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM, Sun: 12PM-9PM' }
  ];

  return (
    <footer id="contact" className="bg-charcoal text-white">
      {/* Newsletter Section */}
      <div className="bg-warm-red py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for special offers, new menu items, and exclusive events.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-charcoal"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-warm-red font-semibold px-6 py-3 rounded-lg hover:bg-cream transition-colors duration-300"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-warm-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-serif font-bold">Classic American</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience authentic American cuisine in an elegant atmosphere. 
                We've been serving our community for over 25 years with passion and dedication.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-warm-red rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-serif font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-serif font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-gold text-lg">{info.icon}</span>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {info.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-serif font-semibold mb-6">Opening Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Thursday</span>
                  <span className="text-gold">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Friday - Saturday</span>
                  <span className="text-gold">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gold">12:00 PM - 9:00 PM</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-warm-red/20 rounded-lg">
                <p className="text-sm text-center">
                  <span className="font-semibold text-gold">Special Hours:</span><br />
                  Closed on Thanksgiving and Christmas Day
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Classic American Restaurant. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                Accessibility
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-warm-red text-white rounded-full shadow-lg hover:bg-gold transition-colors duration-300 z-50"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
