import Image from "next/image"
import skillcapital from "../../assets/skillcapital.jpg"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

export default function AdminNavbar() {

     const router = useRouter();

    const update = () => {
        
        router.push('/updateProfile')
    }

    const logout = () => {

        router.push('/login')
    }


    return (

        <div>
             <nav className="fixed top-0 left-0 w-full  bg-white flex items-center justify-between z-50 shadow">
                <div className="flex ml-2 py-2">
                    <a href="/" className="flex">
                        <Image src={skillcapital} alt="" className="mt-1 h-10"></Image>
                        <h2 className="p-2 text-3xl font-bold">SKILL CAPITAL</h2>
                    </a>
                </div>

                <div className="flex space-x-10">
                    <Link href="" className="text-blue-500 font-medium flex items-center gap-2 hover:underline text-lg">
                        <span className="font-bold">Admin</span>
                        <span className="text-blue-500">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-blue-600 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                    </Link>

                    <div className="relative group mr-6">
                        <div>
                        <Link href=""> <h2 className="bg-blue-500 hover:bg-blue-800  flex items-center justify-center text-white rounded-full font-semibold w-9 h-9 px-2 py-2 mr-6">S</h2></Link>
                        </div>
                        
                        <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-200 rounded-md focus:outline-none shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <button type="submit" className="flex items-center w-full px-4 py-4 hover:bg-gray-200 text-md cursor-pointer" onClick={() => update()}> 
                                <i className="fas fa-user text-xl ml-1 mr-3" onClick={update}></i> Update Profile
                             </button>
                            <button type="submit" className="flex items-center w-full px-4 py-4 hover:bg-gray-200 text-md cursor-pointer" onClick={() => logout()}>
                                <i className="fas fa-sign-out-alt text-xl ml-1 mr-3"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}