// import Image from "next/image";
// import Navbar from "./components/Navbar";
// import JobBanner from "./components/JobBanner";
// import BenefitsList from "./components/BenefitsList";
// import GoodFitSection from "./components/oodFitSection";
// import ApplicationProcess from "./components/ApplicationProcess";
// import ContactFooter from "./components/ContactFooter";
// import ApplicationForm from "./components/ApplicationForm";
// import ApplicationForm2 from "./components/ApplicationForm2";
// import OurMission from "./components/OurMission";
// import download from '../public/download.png'

// export default function Home() {
//   return (

//     <div
//       style={{
//         backgroundImage: `url(${download.src})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center center",
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed"
//       }}
//     >
//       <Navbar />
//       <JobBanner />
//       <BenefitsList />
//       <OurMission />
//       <GoodFitSection />
//       <div className="">
//         <div className="h-100 relative border border-red-500 max-w-6xl">
//           <div className="absolute z-1 border-3">
//             <div className="">
//               <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="red" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></path></svg>
//             </div>
//             <div className="text-white">
//               hi
//             </div>
//           </div>
//         </div>
//       </div>

//       <ApplicationProcess />
//       <ContactFooter />

//       {/* <ApplicationForm2/> */}
//     </div>
//   );
// }


















import Image from "next/image";
import Navbar from "./components/Navbar";
import JobBanner from "./components/JobBanner";
import BenefitsList from "./components/BenefitsList";
import GoodFitSection from "./components/oodFitSection";
import ApplicationProcess from "./components/ApplicationProcess";
import ContactFooter from "./components/ContactFooter";
import OurMission from "./components/OurMission";
import download from '../public/download.png'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${download.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar />
      <JobBanner />
      <BenefitsList />
      <OurMission />
      <GoodFitSection />

      {/* Heart Quote Section - Pixel Perfect Implementation */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
          {/* Heart Icon */}
          <div className="flex justify-end hidden lg:flex max-w-5xl mb-6">
            <div className="w-40 h-40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full">
                <path fill="#FF3B30" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></path>
              </svg>
            </div>
          </div>

          {/* Quote Text */}
          <p className="text-white px-6 text-left font-medium text-2xl lg:text-4xl italic max-w-4xl mx-auto leading-relaxed">
            &quot;Our care is based on the commitment to treat our patients with respect and care.&quot;
          </p>
        </div>
      </div>

      <ApplicationProcess />
      <ContactFooter />
    </div>
  );
}
