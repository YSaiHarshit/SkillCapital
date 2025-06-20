"use client"
import Image from "next/image"
import Login_Image from "../../assets/Login_Image.jpg"
import Logo from "../../assets/Logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    return (

        <div className="p-16 mt-24 ml-72">
            <div>
                <div className="flex space-x-4">
                    <Image src={Logo} alt="" className="h-10 w-10"></Image>
                    <h2 className="text-4xl font-semibold tracking-widest">SKILL CAPITAL</h2>
                </div>

                <form className="mt-10">
                    <div>
                        <div className="space-y-10">
                            <div className="space-y-2">
                                <h2 className="ml-2">Email</h2>
                                <div className="flex items-center border border-gray-300 bg-white rounded-full px-4 py-3 w-86">
                                    <FontAwesomeIcon icon={faEnvelope} className="h-6 text-red-500" />
                                    <input type="email" name="" id="" autoComplete="off" className=" focus:border-blue-500 focus:outline-none px-4 w-86 placeholder-gray-400" placeholder="Enter your email"
                                        {...register('email', {
                                            required: { value: true, message: "Email is required" },
                                            // pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" },
                                        })}
                                    />
                                    <p className='text-red-500'>{errors.email?.message}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="ml-2">Password</h2>
                                <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 w-86">
                                    <FontAwesomeIcon icon={faLock} className="h-6 text-red-500" />
                                    <input type="password" name="user_email" id="email" autoComplete="off" className="focus:border-blue-500 focus:outline-none px-4 placeholder-gray-400" placeholder="******"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 4, message: "Minimum 4 characters required" }
                                        })}
                                    />
                                </div>
                                <p className='text-red-500'>{errors.email?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-x-2 mt-6">
                        <input type="checkbox" name="" id="" className="ml-2 border-gray-400 " />
                        <span>Remember Me</span>
                    </div>

                    <div className="mt-5">
                        <button type="submit" className="bg-red-500 text-white hover:bg-red-700 text-center font-semibold rounded-full px-2 py-2 w-86 cursor-pointer ">Login</button>
                    </div>
                    <div className="mt-6 ml-14">
                        <h2>Don't have an account? <span className="font-semibold text-pink-600 hover:underline cursor-pointer">Sign Up</span></h2>
                    </div>
                </form>
                {/* <div>
                <Image src={Login_Image} alt="" ></Image>
            </div> */}
            </div>
        </div>
    )
}