"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="relative flex justify-between lg:grid lg:grid-cols-3 items-center px-4 md:px-6 lg:pl-12 py-4 bg-white">
                <div className='2xl:flex justify-end 2xl:mr-16'>
                    <Link href="/" className="flex">
                        <Image
                            src="https://onecdn.io/media/b983cc99-b038-41eb-8fd1-54d411d67dab/md2x"
                            alt="St. Josefshaus Refrath Logo"
                            width={270}
                            height={60}
                            priority
                            className="h-auto w-[180px] md:w-[270px]"
                        />
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex text-lg flex justify-center space-x-10">
                    <Link href="/" className="text-black font-bold hover:text-green-600">
                        Advantages
                    </Link>
                    <Link href="/" className="text-black font-bold hover:text-green-600">
                        process
                    </Link>
                </div>
                
                <div className='hidden lg:flex justify-end 2xl:justify-start 2xl:ml-28'>
                    <Link
                        href="/apply"
                        className="bg-[#6cb744] hover:bg-green-600 text-white font-medium  px-6 rounded-md transition-colors duration-200 py-4 ml-4"
                    >
                        Apply now
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
                        <div className="flex flex-col px-4 py-2">
                            <Link
                                href="/advantages"
                                className="py-2 text-black font-medium hover:text-green-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Advantages
                            </Link>
                            <Link
                                href="/process"
                                className="py-2 text-black font-medium hover:text-green-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                process
                            </Link>
                            <Link
                                href="/apply"
                                className="my-2 bg-[#6cb744] hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Apply now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <div className="h-5 bg-[#6cb744] w-full"></div>
        </>
    );
}

