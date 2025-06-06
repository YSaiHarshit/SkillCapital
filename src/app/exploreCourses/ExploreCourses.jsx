import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Adobe from "../../assets/Adobe.webp";
import LandT from "../../assets/LandT.webp";
import Cognizant from "../../assets/Cognizant.webp";
import Microsoft from "../../assets/Microsoft.webp";
import Infosys from "../../assets/Infosys.webp";
import TCS from "../../assets/TCS.webp";
import HCL from "../../assets/HCL.webp"
import Mphasis from "../../assets/Mphasis.webp";
import Wipro from "../../assets/Wipro.webp";
import Tech from "../../assets/Tech.webp";
import Cyient from "../../assets/Cyient.webp"

export default function ExploreCourses() {

    return (

        <div className="bg-gray-100 mt-22">
            <div className="text-center px-4 py-12">
                <h2 className="text-4xl text-gray-800 font-extralight">India's #1 Premium Training Platform</h2>
            </div>

            <div className="text-center text-8xl font-bold space-y-4">
                <h2>Get Skilled to Reach</h2>
                <h2>Your Goal</h2>
            </div>

            <div className="text-center text-lg font-semibold px-2 py-4 space-y-2">
                <h2>Skill Capital is an AI-driven skilling platform designed to</h2>
                <h2>make high-quality learning affordable and accessible to </h2>
                <h2>everyone,everywhere</h2>
            </div>

            <div className="flex items-center justify-center px-2 py-8">
                <button className="bg-red-600 hover:bg-red-700 px-4 py-4 flex items-center justify-center rounded-lg  cursor-pointer ">
                    <FontAwesomeIcon icon={faLaptop} className="text-white h-6" />
                    <span className=" ml-2 text-white font-semibold">Explore Courses</span></button>
            </div>

            <div className="mt-8 px-2 py-4 space-y-2">
                <div className="text-center text-gray-600 font-semibold text-3xl">
                    <h2>Your Path to a successful Career Goals</h2>
                </div>

                <div className="text-center">
                    <h2 className="text-lg font-medium">Our Alumni Work at Top Companies</h2>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center space-x-20 mt-10 ml-56">
                        <div className=" flex items-center space-x-2">
                            <Image src={Adobe} alt="adobe" className="h-14 w-36 transition duration-100 hover:brightness-75" />
                        </div>

                        <div className=" flex items-center space-x-2">
                            <Image src={LandT} alt="landt" className="text-yellow-300 h-16 w-42 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div className=" flex items-center space-x-2">
                            <Image src={Cognizant} alt="cognizant" className="h-10 w-44 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div className=" flex items-center space-x-2">
                            <Image src={Microsoft} alt="microsoft" className="transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div>
                            <Image src={Infosys} alt="infosys" className="h-10 w-32 transition duration-100 hover:brightness-75"></Image>
                        </div>

                    </div>

                    <div className="flex items-center space-x-12 ml-56 mb-4">
                        <div>
                            <Image src={TCS} alt="tcs" className="h-18 w-40 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div>
                            <Image src={HCL} alt="hcl" className="h-8 w-40 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div>
                            <Image src={Mphasis} alt="mphasis" className=" h-16 w-40 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div>
                            <Image src={Wipro} alt="wipro" className="h-16 w-32 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div>
                            <Image src={Tech} alt="tech" className="h-14 w-26 transition duration-100 hover:brightness-75"></Image>
                        </div>

                        <div>
                            <Image src={Cyient} alt="cyient" className="h-14 w-32 transition duration-100 hover:brightness-75"></Image>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}