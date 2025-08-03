import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ADmyBRAND</h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses with AI-driven marketing solutions.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-6 h-6 bg-current rounded" />
                  </a>
                )
              )}
            </div>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "API", "Integrations"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Press"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Status", "Security"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ADmyBRAND AI Suite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
