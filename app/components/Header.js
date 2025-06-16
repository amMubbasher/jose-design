
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
  
//   // Prevent hydration mismatch
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     // Prevent scrolling when menu is open
//     if (!isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   };

//   return (
//     <header className="w-full py-3 sm:py-4 px-6 flex   items-center justify-between 2xl:justify-evenly relative z-20">
//       <div className="flex items-center 2xl:mr-30">
//         <Image
//           src="https://onecdn.io/media/b983cc99-b038-41eb-8fd1-54d411d67dab/md2x"
//           alt="St. Josefshaus Refrath"
//           width={150}
//           height={60}
//           priority
//           className="h-auto w-auto  sm:max-w-none ml-2 mr-32 2xl:mr-0 sm:ml-10"
//         />
//       </div>

//       {/* Hamburger Menu for Mobile */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-gray-700 hover:text-green-600 focus:outline-none relative z-30"
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isMenuOpen}
//         >
//           <svg
//             className="w-6 h-6 transition-transform duration-300"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Overlay for mobile */}
//       {isMounted && isMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
//           onClick={toggleMenu}
//           aria-hidden="true"
//         />
//       )}

//       {/* Navigation Links */}
//       <nav
//         className={`b${
//           isMounted ? (isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0") : "hidden"
//         } md:translate-x-0 md:opacity-100 md:flex md:items-center md:gap-6 fixed md:static top-0 right-0 h-full md:h-auto bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none w-3/5 md:w-auto z-20 transition-all duration-300 ease-in-out pt-20 md:pt-0`}
//       >
//         <Link
//           href="#"
//           className="block text-base text-gray-700 hover:text-green-600 transition-colors py-3 md:py-0 border-b border-gray-100 md:border-0"
//           onClick={toggleMenu}
//         >
//           Data Protection
//         </Link>
//         <Link
//           href="#"
//           className="block text-base text-gray-700 hover:text-green-600 transition-colors py-3 md:py-0"
//           onClick={toggleMenu}
//         >
//           imprint
//         </Link>
//       </nav>
//     </header>
//   );
// }




"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock/unlock scroll on body when menu toggles
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full py-3 sm:py-4 px-6 flex items-center justify-between 2xl:justify-evenly relative 2xl:gap-64 z-20">
      <div className="flex items-center 2xl:mr-64">
        <Image
          src="https://onecdn.io/media/b983cc99-b038-41eb-8fd1-54d411d67dab/md2x"
          alt="St. Josefshaus Refrath"
          width={200}
          height={60}
          priority
          className="h-auto w-auto sm:max-w-none ml-2 mr-32 2xl:mr-0 sm:ml-10"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-green-600 focus:outline-none relative z-30"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMounted && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Navigation Links */}
      <nav
        className={`b${
          isMounted
            ? isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            : "hidden"
        } md:translate-x-0 md:opacity-100 md:flex md:items-center md:gap-6 fixed md:static top-0 right-0 h-full md:h-auto bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none w-3/5 md:w-auto z-20 transition-all duration-300 ease-in-out pt-20 md:pt-0`}
      >
        <Link
          href="#"
          className="block text-base text-gray-700 hover:text-green-600 transition-colors py-3 md:py-0 border-b border-gray-100 md:border-0"
          onClick={toggleMenu}
        >
          Data Protection
        </Link>
        <Link
          href="#"
          className="block text-base text-gray-700 hover:text-green-600 transition-colors py-3 md:py-0"
          onClick={toggleMenu}
        >
          Imprint
        </Link>
      </nav>
    </header>
  );
}
