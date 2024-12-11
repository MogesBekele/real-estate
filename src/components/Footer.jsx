import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-14 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto gap-2  flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4 pr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi
            harum quos magnam perspiciatis explicabo nesciunt. Cumque autem
            commodi aliquam praesentium nisi doloremque quas sit sunt
            dignissimos temporibus? Molestias, sequi!
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to Our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            the latest news, articles and resourses sent to your inbox weekly
          </p>

          <div className="flex gap-2">
            <input
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              type="email"
              placeholder="Your Email"
            />
            <button className="py-2 px-4 rounded bg-blue-400 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        copyright 2024 @ mogesbekele. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
