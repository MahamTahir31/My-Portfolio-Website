import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-blue-900 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-3 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="./src/assets/logo.png "
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-2 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" target="_blank"     className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" target="_blank" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Follow me</h2>
                            <ul className="text-white  font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/MahamTahir31"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="https://leetcode.com/Maham31/"
                                    target="_blank"
                                     className="hover:underline">
                                        Leetcode
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Social Pages</h2>
                            <ul className="text-white  font-medium">
                                <li className="mb-4">
                                    <Link 
                                    to="https://www.instagram.com/poetrybymahamtahir?igsh=MWhldDJoYnBsdWUyYg=="
                                    target="_blank"
                                     className="hover:underline">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="https://www.facebook.com/profile.php?id=61551657878159&mibextid=ZbWKwL"
                                    target="_blank"
                                    className="hover:underline">
                                        Facebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white  sm:text-center">
                        © 2024
                      
                        All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link 
                        to="https://www.facebook.com/profile.php?id=61551657878159&mibextid=ZbWKwL"
                        target="_blank"
                         className="text-white hover:text-gray-900">
                        <img className="w-4 h-4" src="./src/assets/facebook.png" alt="" srcset="" />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link 
                        to="https://www.instagram.com/poetrybymahamtahir?igsh=MWhldDJoYnBsdWUyYg=="
                        target="_blank"
                        className="text-white ">
                           <img className="w-4 h-4" src="./src/assets/instagram.png" alt="" srcset="" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link 
                        to="https://twitter.com/Maham_Tahir31?t=FrTTOcN48QHB83Ely55vGA&s=08"
                        target="_blank"
                         className="text-white ">
                        <img className="w-4 h-4" src="./src/assets/twitter.png" alt="" srcset="" />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link 
                        to="https://github.com/MahamTahir31" 
                        target="_blank"
                        className="text-white ">
                        <img className="w-4 h-4" src="./src/assets/github.png" alt="" srcset="" />
                            <span className="sr-only">GitHub account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
