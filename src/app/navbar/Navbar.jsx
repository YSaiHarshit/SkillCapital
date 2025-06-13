"use client"
import Image from "next/image"
import Link from "next/link";
import SignUp from "../signUp/SignUp";
import skillcapital from "../../assets/skillcapital.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {

    const [isSignUp, setIsSignUp] = useState();

    const handleClick = () => {
        window.open("/login", "_blank");
    };

    return (

        <div>
            <div>
                <nav className="fixed top-0 left-0 w-full bg-white flex items-center z-50 shadow">
                    <div className="flex ml-32 px-2 py-2">
                        <a href="" className="flex">
                            <Image src={skillcapital} alt="" className="mt-2 h-12 w-16"></Image>
                            <h2 className="p-4 text-4xl font-medium">SKILL CAPITAL</h2>
                        </a>
                    </div>

                    <div className="relative group inline-block text-left ml-24">
                        <div className="flex cursor-pointer space-x-2">
                            <h2 className="text-xl font-medium">Courses</h2>
                            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mt-2" />
                        </div>

                        <div className="absolute left-0 mt-7 w-50 rounded-b-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                            <div className="py-2">
                                <Link href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-sm text-gray-700">Python</span>
                                </Link>
                                <Link href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-sm text-gray-700">Devops</span>
                                </Link>
                                <Link href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-sm text-gray-700">React JS</span>
                                </Link>
                                <Link href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-sm text-gray-700">Azure Cloud</span>
                                </Link>
                                <Link href="/courses" className="flex items-center px-4 py-2 text-sm text-gray-700">
                                    <button className="bg-pink-600 text-slate-50 hover:bg-pink-700 font-semibold px-2 py-3 w-40 rounded-md cursor-pointer">All Courses</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=" relative ml-6">
                        <input type="text" name="" id="" className="border border-slate-400 focus:outline-none rounded-md  shadow-4xl px-4 py-2 w-96 " placeholder="Search Courses.." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-3  shadow-2xl top-1/2 transform -translate-y-1/2 text-gray-500 h-6 mr-1"
                        />
                    </div>

                    <div className="ml-24">
                        <button onClick={() => setIsSignUp(true)} className="bg-red-600 px-6 py-3 text-center rounded-md text-white font-medium hover:bg-red-500 cursor-pointer">Sign Up</button>
                    </div>

                    <div className="ml-12">
                        <button onClick={handleClick} className="border border-red-400 bg-white px-6 py-3 text-center rounded-md text-red-600 font-medium cursor-pointer">Log In</button>
                    </div>
                </nav>
            </div>
            {isSignUp && (<SignUp setIsSignUp={setIsSignUp} />)}
        </div>
    )
}