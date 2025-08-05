"use client"
import Image from "next/image"
import Link from "next/link";
import SignUp from "../signUp/SignUp";
import skillcapital from "../../assets/skillcapital.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState , useRef , useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const [isSignUp, setIsSignUp] = useState();
    const [selected, setSelected] = useState('Courses');
    const [isOpen , setisOpen ] = useState(false);
    const dropdownRef = useRef(null);

    const courseLinks =[
        
        {label: "Python" , href:"/python"},
        {label: "Devops" , href:"#"},
        {label: "Oops With Python" , href:"#"},
        {label: "Html and Css for Web" , href:"#"},
        {label: "JavaScript" , href:"#"}
    ]

    const AllCoursesLink = [
        {label: "All Courses" , href:"/courses"}
    ]
    
    // const options = ['Python' , 'Devops' , 'Oops With Python' , 'Html and Css for Web' , 'JavaScript' , 'All Courses'];

    const router = useRouter();

    const handleClick = () => {
        window.open("/login", "_blank");
    };

    const handleSignUp = () => {
        setIsSignUp(true);
    }

    const python = () => {
        router.push('/python')
    }

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setisOpen(false);
            }
        };

        document.addEventListener("mousedown" , handleClickOutside);

        return () => {
            document.removeEventListener("mousedown" , handleClickOutside)
        }

    } , [])

    return (

        <div>
            <div>
                <nav className="fixed top-0 left-0 w-full bg-white flex items-center z-50 shadow">
                    <div className="flex ml-32 px-2 py-2">
                        <a href="/" className="flex">
                            <Image src={skillcapital} alt="" className="mt-2 h-12 w-16"></Image>
                            <h2 className="p-4 text-4xl font-medium">SKILL CAPITAL</h2>
                        </a>
                    </div>

                    <div className="relative inline-block text-left ml-24" ref={dropdownRef}>
                        <div onClick={() => setisOpen((prev) => !prev)} className="flex cursor-pointer space-x-2">
                            <h2  className="text-xl font-medium">{selected}</h2>
                            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown } className="w-4 h-4 mt-2" />
                        </div>

                        {isOpen && (
                            <div className="absolute left-0 mt-7 w-56 rounded-b-md shadow-lg bg-white ">
                            <div>

                                {courseLinks.map((course , index) => (
                                    <Link key={index} href={course.href} className="flex items-center px-4 py-1 text-sm text-gray-700 hover:bg-gray-200 hover:text-pink-600" onClick={python}>
                                    <FontAwesomeIcon icon={faAnglesRight} className="text-pink-600 mr-2 w-5" />
                                    <span className="text-sm text-gray-700">{course.label}</span>
                                </Link>
                                ))}
                
                                   {AllCoursesLink.map((AllCourses , index) => (
                                     <Link key={index} href={AllCourses.href} className="flex items-center px-5 py-2 text-sm text-gray-700">
                                    <button className="bg-pink-600 text-slate-50 hover:bg-pink-700 font-semibold px-2 py-3 w-44 rounded-lg cursor-pointer">{AllCourses.label}</button>
                                </Link>
                                   ))}
                            </div>
                        </div>
                        )}
                    </div>


                    <div className=" relative ml-6">
                        <input type="text" name="" id="" className="border border-slate-400 focus:outline-none rounded-md  shadow-4xl px-4 py-2 w-96 " placeholder="Search Courses.." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-3  shadow-2xl top-1/2 transform -translate-y-1/2 text-gray-500 h-6 mr-1"
                        />
                    </div>

                    <div className="ml-24">
                        <button onClick={handleSignUp} className="bg-red-600 px-6 py-3 text-center rounded-md text-white font-medium hover:bg-red-500 cursor-pointer">Sign Up</button>
                    </div>

                    <div className="ml-12">
                        <button onClick={handleClick} className="border border-blue-400 bg-white px-6 py-3 text-center hover:bg-blue-500 hover:text-white rounded-md text-blue-600 font-medium cursor-pointer">Log In</button>
                    </div>
                </nav>
            </div>
            {isSignUp && (<SignUp setIsSignUp={setIsSignUp} close={ () =>setIsSignUp(false)} />)}
        </div>
    )
}