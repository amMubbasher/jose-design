"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function OurMission() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div className="min-h-screen bg-[#004663] text-white p-4 md:p-8 lg:p-16">
            <div className="container mx-auto max-w-6xl">
                <div className="text-left mb-8">
                    <p className="text-[#c9a55c] text-sm md:text-base uppercase tracking-wider font-medium">
                        OUR ADMISSION PROCEDURE FOR YOU
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-12 md:mb-16">
                        Your next steps for home care
                    </h1>
                </div>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-[#0a5575] hidden lg:block"></div>
                    
                    {/* Steps */}
                    <div className="space-y-16 md:space-y-24">
                        {/* Step 1: Contact us */}
                        <div className="relative">
                            <div className="absolute  left-0 top-12 w-8 h-8 rounded-full bg-green-500 z-10 hidden lg:flex items-center justify-center">
                                <FaCheck className="text-sm" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row gap-8 lg:pl-16">
                                <div className="flex items-center justify-center w-full md:w-52 h-52 p-6 rounded-lg border-2 border-white bg-[#00557a] mx-auto lg:mx-0">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6303505b30903d01fd6f9ab3/630d0cb8310db03b8cb3157f_emergency-call.svg"
                                        alt="Contact icon"
                                        width={80}
                                        height={80}
                                        className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain"
                                    />
                                </div>
                                <div className="text-center lg:text-left flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">Contact us</h3>
                                    <p className="text-[#adbbc1]">You can reach us by phone or via our form.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Step 2: Advice */}
                        <div className="relative">
                            <div className="absolute left-0 top-12 w-8 h-8 rounded-full bg-green-500 z-10 hidden lg:flex items-center justify-center">
                                <FaCheck className="text-white text-sm" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row gap-8 lg:pl-16">
                                <div className="flex items-center justify-center w-full md:w-52 h-52 p-6 rounded-lg border-2 border-white bg-[#00557a] mx-auto lg:mx-0">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6303505b30903d01fd6f9ab3/630d0a84a5eb37d8cc813de3_healthcare-and-medical.svg"
                                        alt="Advice icon"
                                        width={80}
                                        height={80}
                                        className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain"
                                    />
                                </div>
                                <div className="text-center lg:text-left flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">Advice</h3>
                                    <p className="text-[#adbbc1]">In an initial consultation, you will receive general information about senior care at home, our services, and our care rates.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Step 3: Scope of services */}
                        <div className="relative">
                            <div className="absolute left-0 top-12 w-8 h-8 rounded-full bg-green-500 z-10 hidden lg:flex items-center justify-center">
                                <FaCheck className="text-white text-sm" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row gap-8 lg:pl-16">
                                <div className="flex items-center justify-center w-full md:w-52 h-52 p-6 rounded-lg border-2 border-white bg-[#00557a] mx-auto lg:mx-0">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6303505b30903d01fd6f9ab3/630d0d3e0a58e96298cf9ad4_medical-record.svg"
                                        alt="Services icon"
                                        width={80}
                                        height={80}
                                        className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain"
                                    />
                                </div>
                                <div className="text-center lg:text-left flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">Scope of services</h3>
                                    <p className="text-[#adbbc1]">Together, we will determine the scope of services. You will also receive a draft contract for senior care at home.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Step 4: Start of care */}
                        <div className="relative">
                            <div className="absolute left-0 top-12 w-8 h-8 rounded-full bg-green-500 z-10 hidden lg:flex items-center justify-center">
                                <FaCheck className="text-white text-sm" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row gap-8 lg:pl-16">
                                <div className="flex items-center justify-center w-full md:w-52 h-52 p-6 rounded-lg border-2 border-white bg-[#00557a] mx-auto lg:mx-0">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6303505b30903d01fd6f9ab3/630d0cb8f2f0b15cdc2db5e9_insurance.svg"
                                        alt="Care icon"
                                        width={80}
                                        height={80}
                                        className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain"
                                    />
                                </div>
                                <div className="text-center lg:text-left flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">Start of care</h3>
                                    <p className="text-[#adbbc1]">The carer will support you with your care and support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
