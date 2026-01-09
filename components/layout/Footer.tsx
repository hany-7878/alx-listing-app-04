import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} MyStay. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Designed with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
