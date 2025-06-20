"use client"
import Image from "next/image";
import Python from "../../assets/Python.jpg";
import Devops from "../../assets/Devops.jpg"
import oops_with_python from "../../assets/oops_with_python.jpg"
import React_JS from "../../assets/React_JS.jpg"
import Azure_Cloud from "../../assets/Azure_Cloud.jpg"
import Fundamentals_Of_Tech from "../../assets/Fundamentals_Of_Tech.jpg"
import AWS_Cloud from "../../assets/AWS_Cloud.jpg"
import Site_Reliability_Engineer from "../../assets/Site_Reliability_Engineer.jpg"
import Html_and_Css_For_Web from "../../assets/Html_and_Css_For_Web.jpg"
import JavaScript from "../../assets/JavaScript.jpg"
import Kubernetes from "../../assets/Kubernetes.jpg"
import Terraform from "../../assets/Terraform.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";


const Courses = [

    { title: "Python", img: Python },
    { title: "Devops", img: Devops },
    { title: "Oops With Python", img: oops_with_python },
    { title: "Html_and_Css_For_Web", img: Html_and_Css_For_Web },
    { title: "JavaScript", img: JavaScript },
    { title: "React_JS", img: React_JS },
    { title: "Terraform", img: Terraform },
    { title: "Kubernetes", img: Kubernetes },
    { title: "Site_Reliability_Engineer", img: Site_Reliability_Engineer },
    { title: "AWS_Cloud", img: AWS_Cloud },
    { title: "Azure_Cloud", img: Azure_Cloud },
    { title: "Fundamentals_Of_Tech", img: Fundamentals_Of_Tech }

]

export default function TrendingCourses() {

    const [isCurrentPage, setIsCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Courses.length - cardsPerPage + 1;

    const visibleCourses = Courses.slice(isCurrentPage, isCurrentPage + cardsPerPage);


    useEffect(() => {
        const interval = setInterval(() => {
            setIsCurrentPage((prev) => (prev + 1) % totalPages);
        }, 6000);
        return () => clearInterval(interval);
    }, [totalPages]);


    return (

        <div className="bg-gray-200">
            <div className="px-4 py-10">
                <h2 className="text-5xl text-slate-600 font-semibold text-center">Trending Courses</h2>
            </div>

            <div className="flex max-w-8xl gap-10 px-10">
                {visibleCourses.map((course, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden w-[450px] transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-pointer">
                        <Image src={course.img} alt={course.title} className="object-cover cursor-pointer"></Image>

                        <div className="px-6 py-4">
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faUser} className="text-green-400 ml-5 text-xl" />
                                <h2 className="text-xl font-bold ml-2">10000</h2> <span className="ml-2 text-md">Learners Enrolled</span>
                            </div>

                            <div className="flex items-center mr-8 space-x-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? 'text-yellow-500 text-sm' : 'text-gray-300 text-sm'} />
                                ))}
                                <h2 className="text-xl font-bold">4.0</h2>
                            </div>
                        </div>

                        <div className="flex items-center py-2 gap-1">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="text-red-400 ml-5 text-xl" />
                                <h2 className="text-xl font-bold ml-2">30 Hours</h2> <span className="text-md mt-1 ml-2">Duration</span>
                            </div>
                        </div>

                        <div className="mt-2 ml-6 text-xl font-bold">₹ 999</div>

                        <div className="p-4 text-gray-300">
                            <hr />
                        </div>

                        <div className="p-4 flex justify-center">
                            <h2 className="text-2xl text-pink-600 font-semibold cursor-pointer">View Course
                                <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
                            </h2>
                        </div>
                    </div>
                ))}

            </div>

            <div className="flex justify-center mt-12 space-x-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button key={i} className={`w-2 h-2  rounded-full ${isCurrentPage === i ? 'bg-pink-600' : 'bg-gray-400'}`} onClick={() => setIsCurrentPage(i)} > </button>
                ))}
            </div>

            <div className="text-center px-6 py-4">
            </div>
            <div>
            </div>
        </div>
    )
}