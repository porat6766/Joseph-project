"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/Screenshot_2025-02-24_185209-removebg-preview.png";
import Link from "next/link";  // Importing Next.js Link

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

            <button
                className="lg:hidden absolute top-4 right-4 p-2 cursor-pointer"
                onClick={toggleMenu}
            >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            <div
                className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${isOpen ? "block" : "hidden"}`}
            >
                <div className="absolute top-0 right-0 p-4">
                    <button onClick={toggleMenu} className="text-white text-xl">
                        X
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <Image src={Logo} alt="Logo" width={100} height={100} className="mb-4" />
                    <Link href="/" className="py-2 text-xl">עמוד ראשי</Link>
                    <Link href="/about" className="py-2 text-xl">קצת עליי</Link>
                    <div></div>
                    <Link href="/services" className="py-2 text-xl">שירותי המשרד</Link>
                    <Link href="/blog" className="py-2 text-xl">בלוג</Link>
                    <Link href="/articles" className="py-2 text-xl">כתבות</Link>
                    <Link href="/contact" className="py-2 text-xl">צור קשר</Link>
                </div>
            </div>

            <div className="hidden lg:flex justify-between items-center bg-gray-800 text-white p-4">
                <div className="flex items-center space-x-4">
                    <Image src={Logo} alt="Logo" width={60} height={60} />
                </div>
                <div className="space-x-4">
                    <Link href="/" className="ml-3">עמוד ראשי</Link>
                    <Link href="/about">קצת עליי</Link>
                    <Link href="/services">שירותי המשרד</Link>
                    <Link href="/blog">בלוג</Link>
                    <Link href="/articles">כתבות</Link>
                    <Link href="/contact">צור קשר</Link>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;
