import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Growing() {

    return (

        <div className="bg-gray-200 p-10">
            <div className="flex justify-between">
                <div className="p-14 ml-10 space-y-2">
                    <h2 className="text-4xl font-bold">Start growing with <span className="text-4xl text-pink-600 font-bold">Skill Capital</span></h2>
                    <h2 className="text-2xl font-normal">Stay up to date with the latest news,announcements and articles.</h2>
                </div>

                <div className="flex items-center justify-center px-16 py-8">
                    <Link href="/courses">
                    <button className="bg-red-500 hover:bg-red-700 px-4 py-4 flex items-center justify-center space-x-2 rounded-lg  cursor-pointer ">
                        <FontAwesomeIcon icon={faLaptop} className="text-white text-xl" />
                        <span className=" ml-2 text-white font-semibold">Explore Courses</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}