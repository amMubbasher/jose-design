"use client";

import Image from "next/image";

export default function ApplicationProcess() {
  return (
    <div className="w-full bg-white font-sans">
      {/* Header Section */}
      <header className="max-w-5xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1930]">
          The St. Josefshaus Refrath
        </h1>
        <h2 className="text-3xl font-bold text-[#5cb85c] mt-2">
          in Bergisch Gladbach
        </h2>
      </header>

      {/* Information Paragraphs */}
      <div className="max-w-6xl mx-auto px-4 space-y-6 text-center">
        <p className="text-sm md:text-base leading-relaxed">
          Altenhilfe St. Marien gGmbH is the Catholic operator of three retirement and nursing homes, continuing the Pallottine Sisters' long-standing tradition of providing care for the elderly in their spirit. It is a company of the St. Vincent Pallotti Foundation, founded by the Pallottine Sisters in Limburg.
        </p>
        
        <p className="text-sm md:text-base leading-relaxed">
          The association was founded in 2004 by the St. Vincent Pallotti Foundation to support the former Pallottine nursing homes in Bergisch Gladbach and Limburg. In 2014, the elderly care organization expanded to include the Friederike Fliedner House in Braunfels.
        </p>
        
        <p className="text-sm md:text-base leading-relaxed">
          At the Bergisch Gladbach location, the provider operates the St. Josefshaus Refrath inpatient facility for 184 residents, with scattered short-term care places. It also operates a day care facility for 16 guests.
        </p>
        
        <p className="text-lg md:text-xl font-medium text-[#5cb85c] py-4">
          Interested? Then apply now quickly and easily and become part of our team.
        </p>
      </div>
      
      {/* Application Process Section */}
      <div className="w-full bg-gray-100 py-12 md:py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Image */}
          <div className="relative h-[300px] md:h-[400px] w-full order-1 md:order-none">
            <Image 
              src="https://onecdn.io/media/8b33ed6f-a948-4700-b932-01e010249a7a/preview"
              alt="Caregiver interacting with resident" 
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          
          {/* Right: Steps */}
          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#0a1930] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Application for the position</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Apply quickly and easily using the "Apply online now" button.
                  Simply answer the questions and submit your answers.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#0a1930] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Review of the application</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our HR team will review your information. If your profile meets
                  our requirements, we will invite you.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#0a1930] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Feedback and possible adjustment</h3>
                <p className="text-gray-700 leading-relaxed">
                  After the interview, you will receive immediate feedback from us.
                  A positive evaluation will result in a job offer and employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="w-full py-10 flex justify-center">
        <button className="bg-[#6cb744] hover:bg-[#4cae4c] text-white font-medium text-center py-2 px-10 md:px-20 lg:px-36 rounded-md transition-colors duration-200 shadow-md">
          <div className="text-lg">Apply online now!</div>
          <div className="text-sm font-normal">Quick in under a minute!</div>
        </button>
      </div>
    </div>
  );
}
