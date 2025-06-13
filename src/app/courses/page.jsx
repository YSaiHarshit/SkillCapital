"use client"
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Python from "../../assets/Python.jpg"
import Devops from "../../assets/Devops.jpg"
import React_JS from "../../assets/React_JS.jpg"
import Azure_Cloud from "../../assets/Azure_Cloud.jpg"
import Fundamentals_Of_Tech from "../../assets/Fundamentals_Of_Tech.jpg"
import AWS_Cloud from "../../assets/AWS_Cloud.jpg"
import AWS_Advanced from "../../assets/AWS_Advanced.jpg"
import Site_Reliability_Engineer from "../../assets/Site_Reliability_Engineer.jpg"
import SQL from "../../assets/SQL.jpg"
import Html_and_Css_For_Web from "../../assets/Html_and_Css_For_Web.jpg"
import JavaScript from "../../assets/JavaScript.jpg"
import UI_UX from "../../assets/UI_UX.jpg"
import Next_JS from "../../assets/Next_JS.jpg"
import Node_JS from "../../assets/Node_JS.jpg"
import Express_JS from "../../assets/Express_JS.jpg"
import Manual_Testing from "../../assets/Manual_Testing.jpg"
import Azure_Admin from "../../assets/Azure_Admin.jpg"
import Azure_Devops from "../../assets/Azure_Devops.jpg"
import Kubernetes from "../../assets/Kubernetes.jpg"
import Terraform from "../../assets/Terraform.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Courses() {

    const Courses = [

        { title: "Python", image: Python },
        { title: "Devops", image: Devops },
        { title: "HTML & CSS for Web", image: Html_and_Css_For_Web },
        { title: "JavaScript", image: JavaScript },
        { title: "ReactJS", image: React_JS },
        { title: "OOPS with Python", image: React_JS },
        { title: "Fundamentals of Tech", image: Fundamentals_Of_Tech },
        { title: "AWS Cloud", image: AWS_Cloud },
        { title: "Site Reliability Engineer (SRE)", image: Site_Reliability_Engineer },
        { title: "Azure Admin", image: Azure_Admin },
        { title: "Kubernetes", image: Kubernetes },
        { title: "Terraform", image: Terraform }
    ]

    return (

        <div>
            <Navbar />

            <div className="flex justify-center bg-pink-100 px-5 py-8">
                <div className="flex items-center mt-22 text-center space-x-3">
                    <h2 className="text-3xl font-normal text-red-500 justify-center">All Courses</h2>
                    <div className="border-l border-pink-300 h-10"></div>
                    <p>Find and select your desired course below.</p>
                </div>
            </div>

            <div className="mt-10 ml-44  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-4">
                {Courses.map((course, index) => (
                    <div key={index} className=" overflow-hidden  transition transform hover:-translate-y-1 hover:scale-105 rounded-2xl shadow-lg cursor-pointer">
                        <Image src={course.image} alt={course.title} className="h-64 rounded-2xl"></Image>
                        <div className="px-4 py-2 mt-2">
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faUser} className="text-green-400 ml-3 text-sm" />
                                <h2 className="text-xl font-bold ml-2">10000</h2> <span className="ml-1 text-sm">Learners Enrolled</span>
                            </div>

                            <div className="flex items-center mr-4">
                                {[...Array(4)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? 'text-yellow-500 text-sm' : 'text-gray-300 text-sm'} />
                                ))}
                                <h2 className="text-xl font-bold ml-1">4.0</h2>
                            </div>
                        </div>

                        <div className="flex items-center py-2 gap-1">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="text-red-400 ml-2 text-sm" />
                                <h2 className="text-xl font-bold ml-3">30 Hours</h2> <span className="text-md mt-1 ml-1">Duration</span>
                            </div>
                        </div>

                        <div className="mt-2 ml-3 text-xl font-bold mb-4">₹ 999</div>

                        <div className="p-2 text-gray-300">
                            <hr />
                        </div>

                        <div className="px-4 py-6 flex justify-center">
                            <h2 className="text-2xl text-pink-600 font-semibold text-center cursor-pointer">View Course
                                <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}