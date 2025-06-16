"use client"

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

export default function JobBanner() {
  return (
    <div className="relative w-full h-screen  lg:h-[540px] flex justify-center">
      {/* Background Image */}
      <Image
        src="https://onecdn.io/media/fc56a273-3769-4bed-8cfb-47da014a4bba/xlg2x"
        alt="St. Josefshaus Refrath building exterior"
        fill
        priority
        className="object-cover brightness-[0.4]"
      />
      
      {/* Content Overlay */}
      <div className="absolute w-[100%] 2xl:w-[70%] flex flex-col px-4 lg:px-6 lg:px-16 lg:ml-10 py-16">
        <div className="">
          {/* Main Heading with green underline */}
          <h1 className="text-white text-3xl lg:text-6xl md:text-5xl font-bold mb-2">
            We are looking for:
            <span className="block w-16 h-1  mt-2"></span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-3xl lg:text-6xl md:text-5xl font-bold mt-2 mb-8">
            Nursing staff (m/f/d)
          </h2>
          
          {/* Location Info */}
          <div className="lg:grid grid-cols-2 items-center text-white mb-6">
            <div className="flex items-center">
                <FaMapMarkerAlt className="text-pink-500 mr-2 text-xl" size={28} />
            <span className="text-3xl font-bold mr-4">51427 Bergisch Gladbach Refrath</span>
            </div>
          <div className="flex items-center">
             <BsBuilding className="text-white mr-2 text-xl" size={28}/>
            <span className="text-3xl font-bold">St. Josefshaus Refrath</span>
          </div>
           
          </div>
          
          {/* Advertised Positions */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">
              Advertised positions:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white text-3xl mr-6">•</span>
                <span className="text-xl font-bold">Nursing staff (m/f/d)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white text-3xl mr-6">•</span>
                <span className="text-xl font-bold">Nursing assistants (m/f/d)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white text-3xl mr-6">•</span>
                <span className="text-xl font-bold">Domestic worker for house cleaning (m/f/d)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
