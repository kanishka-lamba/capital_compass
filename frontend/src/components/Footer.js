import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
              <h2 class="text-lg font-bold mb-4">Company</h2>
              <ul class="list-none">
                <li>
                  <a href="/" class="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
              <h2 class="text-lg font-bold mb-4">Services</h2>
              <ul class="list-none">
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
              <h2 class="text-lg font-bold mb-4">Resources</h2>
              <ul class="list-none">
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
              <h2 class="text-lg font-bold mb-4">Follow Us</h2>
              <ul class="list-none">
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-gray-300">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
