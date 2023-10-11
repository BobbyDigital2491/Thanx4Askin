/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';

const H2: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="relative">
            <button
                id="navbar-toggle"
                type="button"
                className="p-2 -m-2 text-gray-400 transition-all duration-200 lg:hidden hover:text-gray-400"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div
                id="dropdown-menu"
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } absolute top-full left-0 lg:hidden`}
            >
                <br/>
                <ul className="bg-white border w-32 -mx-20 border-gray-300 p-2">
                <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-white hover:text-black bg-red-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-red-600 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-gray-400 md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                <a href="/episodes" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-gray-400 md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Episodes</a>
                </li>
                <li>
                <a href="https://form.jotform.com/232798407887173" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-gray-400 md:border-0 md:hover:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default H2;