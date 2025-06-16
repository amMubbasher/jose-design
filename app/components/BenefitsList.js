// "use client"
// import { useState, useEffect } from "react";
// export default function BenefitsList() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Handle responsive behavior
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Custom SVG icons for each benefit
//   const benefitIcons = {
//     calendar: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20Zm0-11H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/>
//       </svg>
//     ),
//     piggyBank: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M19.9,11.1V10a7,7,0,0,0-5-6.7V2a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V3H11a7,7,0,0,0-7,7v1.1A2,2,0,0,0,3,13v2a2,2,0,0,0,2,2h.1A8.1,8.1,0,0,0,10,21.1V23a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V21.1A8.1,8.1,0,0,0,18.9,17H19a2,2,0,0,0,2-2V13A2,2,0,0,0,19.9,11.1ZM19,15H18a1,1,0,0,0-.9.6A6.1,6.1,0,0,1,13,19.1a1,1,0,0,0-.8,1V22H12V20.1a1,1,0,0,0-.8-1A6.1,6.1,0,0,1,7,15.6,1,1,0,0,0,6,15H5V13H6a1,1,0,0,0,.9-.6A5.2,5.2,0,0,1,8,10.6,1,1,0,0,0,8.2,9L7.8,7.5A1.1,1.1,0,0,1,8.5,6,1.2,1.2,0,0,1,10,7a1,1,0,0,0,.8,1.1H13a1,1,0,0,0,1-.9c0-.1.1-.1.1-.2a1,1,0,0,1,1.7-.7,1,1,0,0,1,.3.7,3.8,3.8,0,0,1-2.1,2.8,1,1,0,0,0-.6.9c0,.1-.1.1-.1.2A1,1,0,0,0,15,11l2,.3a4.9,4.9,0,0,1,1,1.7,1,1,0,0,0,.9.6h.1Z"/>
//         <circle fill="currentColor" cx="14.5" cy="9.5" r="1.5"/>
//       </svg>
//     ),
//     coins: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M12,9,9.5,7.8,7,9,4.5,7.8,2,9V18l2.5-1.2L7,18l2.5-1.2L12,18l2.5-1.2L17,18l2.5-1.2L22,18V9l-2.5-1.2L17,9l-2.5-1.2ZM7,16l-2.5-1.2L4,15V11l.5-.2L7,12l2.5-1.2.5-.2v4l-.5.2Zm12.5-1.2L17,16l-2.5-1.2-.5-.2V11l.5-.2L17,12l2.5-1.2.5-.2v4Z"/>
//         <path fill="currentColor" d="M22,6l-2.5-1.2L17,6l-2.5-1.2L12,6,9.5,4.8,7,6,4.5,4.8,2,6V7l2.5-1.2L7,7l2.5-1.2L12,7l2.5-1.2L17,7l2.5-1.2L22,7Z"/>
//       </svg>
//     ),
//     people: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M12,11A4,4,0,1,0,8,7,4,4,0,0,0,12,11ZM12,5a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z"/>
//         <path fill="currentColor" d="M12,13a7,7,0,0,0-7,7,1,1,0,0,0,2,0,5,5,0,0,1,10,0,1,1,0,0,0,2,0A7,7,0,0,0,12,13Z"/>
//         <path fill="currentColor" d="M20,1a1,1,0,0,0-1-1H5A1,1,0,0,0,5,2H19A1,1,0,0,0,20,1Z"/>
//       </svg>
//     ),
//     card: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M20,4H4A3,3,0,0,0,1,7V17a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V7A3,3,0,0,0,20,4Zm1,13a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11H21Zm0-8H3V7A1,1,0,0,1,4,6H20a1,1,0,0,1,1,1Z"/>
//       </svg>
//     ),
//     grid: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V13h7Zm0-9H4V4h7Zm9,9H13V13h7Zm0-9H13V4h7Z"/>
//       </svg>
//     ),
//     book: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M22,2H6A3,3,0,0,0,3,5V7H2A1,1,0,0,0,1,8v4a1,1,0,0,0,1,1H3v6a3,3,0,0,0,3,3H22a1,1,0,0,0,1-1V3A1,1,0,0,0,22,2ZM5,5A1,1,0,0,1,6,4H8V8H5ZM5,19V15H8v5H6A1,1,0,0,1,5,19ZM10,20V4h4V20Zm11,0H16V4h5Z"/>
//       </svg>
//     ),
//     bicycle: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M19,7a3,3,0,0,0-2.38,1.07L15.9,7.63,17.25,5.5h1.5A1.25,1.25,0,0,0,20,4.25v0A1.25,1.25,0,0,0,18.75,3H16.25A1.25,1.25,0,0,0,15,4.25v0a1.25,1.25,0,0,0,.16.61L14,6.5H10.16L9.58,5.29a1.25,1.25,0,0,0-1.31-.71L5.34,5.09A1.25,1.25,0,0,0,4.25,6.39v0A1.25,1.25,0,0,0,5.55,7.48l2.08-.39.59,1.27-2.87,4a5,5,0,1,0,4.77,4.92h.76L13.22,9H14l.61.41A5,5,0,1,0,19,7ZM5,17a3,3,0,0,1,1.59-2.64l-1,1.49a1,1,0,0,0,.83,1.54,1,1,0,0,0,.83-.45l1-1.49A3,3,0,0,1,5,17Zm5.4-2H10a1,1,0,0,0-.77.37A3,3,0,0,1,6.87,13.5l2.27-3.16L11,14.68A3,3,0,0,1,10.4,15ZM11.25,9,9.12,13.05,7.56,9.65,8.5,7.5h2.52Zm7.75,8a3,3,0,0,1-3-3,3,3,0,0,1,1.34-2.5L15.41,10a5,5,0,0,0-1.81,2.11l-.86-2.89,1.09-.57A5,5,0,0,0,19,7a3,3,0,0,1,0,10Z"/>
//       </svg>
//     ),
//     person: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M12,11A4,4,0,1,0,8,7,4,4,0,0,0,12,11ZM12,5a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z"/>
//         <path fill="currentColor" d="M12,13a7,7,0,0,0-7,7,1,1,0,0,0,2,0,5,5,0,0,1,10,0,1,1,0,0,0,2,0A7,7,0,0,0,12,13Z"/>
//       </svg>
//     ),
//     network: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-[#6cb744]">
//         <path fill="currentColor" d="M19,1a4,4,0,0,0-4,4,4,4,0,0,0,.65,2.17L13.51,9.45a4,4,0,0,0-3,0L8.34,7.17A4,4,0,0,0,9,5,4,4,0,1,0,5,9a3.9,3.9,0,0,0,.29,1.47L3,13.59A4,4,0,1,0,5,18a3.94,3.94,0,0,0-.29-1.47l2.26-3.12A4,4,0,0,0,12,14a3.94,3.94,0,0,0,2.77-1.12l2.26,3.12A3.9,3.9,0,0,0,17,17.05a4,4,0,1,0,4-4,3.94,3.94,0,0,0-1.76.41l-2.25-3.12A4,4,0,0,0,19,1ZM5,7A2,2,0,1,1,7,5,2,2,0,0,1,5,7ZM5,16a2,2,0,1,1-2,2A2,2,0,0,1,5,16Zm7-4a2,2,0,1,1,2-2A2,2,0,0,1,12,12Zm9,6a2,2,0,1,1-2,2A2,2,0,0,1,21,18Zm0-12a2,2,0,1,1-2,2A2,2,0,0,1,21,6Z"/>
//       </svg>
//     )
//   };

//   const benefits = [
//     {
//       icon: "calendar",
//       text: "reliable roster planning"
//     },
//     {
//       icon: "piggyBank",
//       text: "long-term future perspective"
//     },
//     {
//       icon: "coins",
//       text: "performance-related remuneration according to AVR"
//     },
//     {
//       icon: "people",
//       text: "competent and expert team of colleagues and employees"
//     },
//     {
//       icon: "card",
//       text: "Stand-in card (Edenred)"
//     },
//     {
//       icon: "grid",
//       text: "varied work with a high degree of independence"
//     },
//     {
//       icon: "book",
//       text: "Further training and continuing education opportunities"
//     },
//     {
//       icon: "bicycle",
//       text: "Use of a JobRad possible by arrangement"
//     },
//     {
//       icon: "person",
//       text: "additional retirement provision"
//     },
//     {
//       icon: "network",
//       text: "flat hierarchies and short decision-making processes"
//     }
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//       {/* Heading with precise underlined sections */}
//       <h2 className="text-center text-[32px] md:text-[36px] font-bold text-[#0a192f] tracking-tight leading-tight">
//         <span className="inline-block relative">
//           10 good reasons
//           <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6cb744]"></span>
//         </span>
//         <span className="mx-1.5">for a</span>
//         <span className="inline-block relative">
//           Working with us
//           <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6cb744]"></span>
//         </span>
//       </h2>

//       {/* Benefits Grid - Properly spaced */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9 mt-16">
//         {benefits.map((benefit, index) => (
//           <div key={index} className="flex">
//             <div className="flex-shrink-0 w-16 text-2xl border mr-4">
//               {benefitIcons[benefit.icon]}
//             </div>
//             <p className="text-[18px] text-[#333333] pt-1">
//               {benefit.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

























"use client"

import { useState, useEffect } from "react";
import {
  IoCalendarOutline,
  IoWalletOutline,
  IoPeopleOutline,
  IoCardOutline,
  IoGridOutline,
  IoBookOutline,
  IoBicycleOutline,
  IoPersonOutline,
  IoGitNetworkOutline,
  IoCashOutline
} from "react-icons/io5";

export default function BenefitsList() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const benefits = [
    {
      icon: <IoCalendarOutline size={48} className="text-[#6cb744]" />,
      text: "reliable roster planning"
    },
    {
      icon: <IoWalletOutline size={48} className="text-[#6cb744]" />,
      text: "long-term future perspective"
    },
    {
      icon: <IoCashOutline size={48} className="text-[#6cb744]" />,
      text: "performance-related remuneration according to AVR"
    },
    {
      icon: <IoPeopleOutline size={48} className="text-[#6cb744]" />,
      text: "competent and expert team of colleagues and employees"
    },
    {
      icon: <IoCardOutline size={48} className="text-[#6cb744]" />,
      text: "Stand-in card (Edenred)"
    },
    {
      icon: <IoGridOutline size={48} className="text-[#6cb744]" />,
      text: "varied work with a high degree of independence"
    },
    {
      icon: <IoBookOutline size={48} className="text-[#6cb744]" />,
      text: "Further training and continuing education opportunities"
    },
    {
      icon: <IoBicycleOutline size={48} className="text-[#6cb744]" />,
      text: "Use of a JobRad possible by arrangement"
    },
    {
      icon: <IoPersonOutline size={48} className="text-[#6cb744]" />,
      text: "additional retirement provision"
    },
    {
      icon: <IoGitNetworkOutline size={48} className="text-[#6cb744]" />,
      text: "flat hierarchies and short decision-making processes"
    }
  ];

  return (
    <div className="bg-white">
      <div className="w-full bg-white max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Heading with precise underlined sections */}
        <h2 className="text-center text-[30px] md:text-[50px] font-bold text-[#0a192f] tracking-tight leading-tight space-y-4">
          <span className="inline-block relative">
            10 good reasons
            <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6cb744]"></span>
          </span>
          <span className="mx-1.5">for a</span>
          <br></br>
          <span className="inline-block relative">
            Working with us
            <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6cb744]"></span>
          </span>
        </h2>

        {/* Benefits Grid - Properly spaced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-12 mr-4 flex justify-center">
                {benefit.icon}
              </div>
              <p className="text-xl text-[#333333] font-semibold pt-1.5">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
