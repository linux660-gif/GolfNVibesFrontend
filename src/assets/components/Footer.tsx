import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Trending Now</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Sale Items</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Gift Cards</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Special Offers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Membership</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Our Shop</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">Welcome to our premium shopping destination. We offer a curated selection of high-quality products, ensuring an exceptional shopping experience for our valued customers. Our commitment to excellence and customer satisfaction sets us apart in the market.</p>
            <img
              src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3"
              alt="Company Logo"
              className="h-10 w-auto mb-4"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Settings</a>
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;