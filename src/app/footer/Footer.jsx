import Image from "next/image"
import Logo from "../../assets/Logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-white px-16 py-16">
            <div className="flex space-x-10 ">
                <div className="px-24 py-6">
                    <Image src={Logo} alt="Logo" />
                </div>

                <div className="mt-4">
                    <div>
                        <h2 className="text-2xl font-bold ">Course</h2>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex space-x-44">
                            <div className="space-y-2 mt-3">
                                <Link href="/python" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Python</span>
                                </Link>
                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Devops</span>
                                </Link>
                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">React JS</span>
                                </Link>
                            </div>

                            <div className="space-y-2 mt-3">
                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Next JS</span>
                                </Link>
                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Node JS</span>
                                </Link>
                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Power BI</span>
                                </Link>
                            </div>
                        </div>

                        <div className="ml-96 mt--4">
                            <h2 className="text-2xl font-bold">About Us</h2>

                            <div className="space-y-2 mt-4">
                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Company Info</span>
                                </Link>

                                <Link href="#" className="flex items-center  text-sm text-gray-700 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-lg text-pink-600">Contact US</span>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
