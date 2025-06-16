"use client"
import Image from "next/image";
export default function GoodFitSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Image Gallery - Exact dimensions and spacing */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="relative w-full h-[380px] overflow-hidden rounded-lg">
          <Image
            src="https://onecdn.io/media/8b33ed6f-a948-4700-b932-01e010249a7a/preview"
            alt="Caregiver with elderly resident"
            fill
            sizes="(max-width: 768px) 96vw, 32vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="relative w-full h-[380px] overflow-hidden rounded-lg">
          <Image
            src="https://onecdn.io/media/911f520c-8e78-43af-83d9-7fcbd4fbeb0f/md2x"
            alt="Healthcare professional in red uniform"
            fill
            sizes="(max-width: 768px) 96vw, 32vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="relative w-full h-[380px] overflow-hidden rounded-lg">
          <Image
            src="https://onecdn.io/media/b1580e32-784e-4bce-81c0-92a7674d8b5e/md2x"
            alt="Residents enjoying the facility"
            fill
            sizes="(max-width: 768px) 96vw, 32vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Heading - Exact font size and spacing */}
      <div className="mb-14">
        <h2 className="text-center text-[32px] md:text-[46px] font-bold text-[#1a1a2e]">
          You're a good fit for us if...
        </h2>
      </div>

      {/* Qualification List - Exact spacing and alignment */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start border-y py-8 border-zinc-200">
          <div className="flex-shrink-0 mr-5 mt-1">
            <div className="w-[36px] h-[36px] bg-[#6ab04c] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-[22px] font-bold leading-tight text-[#333] mt-2">
            You are sensitive and empathetic in your contact with elderly and sick people.
          </p>
        </div>

        <div className="flex items-start border-b py-8 border-zinc-200">
          <div className="flex-shrink-0 mr-5 mt-1">
            <div className="w-[36px] h-[36px] bg-[#6ab04c] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-[22px] font-bold leading-tight text-[#333] mt-2">
            You have a high level of commitment.
          </p>
        </div>

        <div className="flex items-start border-y py-8 border-zinc-200">
          <div className="flex-shrink-0 mr-5 mt-1">
            <div className="w-[36px] h-[36px] bg-[#6ab04c] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-[22px] font-bold leading-tight text-[#333] mt-2">
            Teamwork is very important to you.
          </p>
        </div>

        <div className="flex items-start border-y py-8 border-zinc-200">
          <div className="flex-shrink-0 mr-5 mt-1">
            <div className="w-[36px] h-[36px] bg-[#6ab04c] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-[22px] font-bold leading-tight text-[#333] mt-2">
            You are responsible and reliable.
          </p>
        </div>
      </div>

      {/* Apply Button - Exact dimensions and styling */}
      <div className="flex justify-center mt-14">
        <button className="bg-[#6cb744] flex flex-col p-3 px-10 md:px-26 lg:px-40 text-white rounded-md">
          <span className="text-lg">Apply online now!</span>
          <span className="text-sm font-normal">Quick in under a minute!</span>
        </button>
      </div>
    </section>
  );
}
