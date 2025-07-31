"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Login_Image from "../../assets/Login_Image.jpg"
import Logo from "../../assets/Logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faEye, faLock, faSlash } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"


export default function SignUp() {

     const [showPassword, setShowPassword] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const [student, setStudent] = useState([]);
        const router = useRouter();
    
        const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

        const login = () => {
            router.push('/login')
        }

    return (

        <div className="flex items-center justify-center">
            <div className="flex overflow-hidden  max-w-10xl">
                <div className="p-28">
                    <div className="flex space-x-4">
                        <Image src={Logo} alt="" className="h-10 w-10"></Image>
                        <h2 className="text-4xl font-semibold tracking-widest">SKILL CAPITAL</h2>
                    </div>

                    <form className="mt-10" autoComplete="off">
                        <div>
                            <div className="space-y-6">

                                <div className="space-y-2">
                                    <h2 className="ml-2">Name</h2>
                                    <div className="flex items-center border border-gray-300 bg-white rounded-3xl px-4 py-2 w-[430px]">
                                        <FontAwesomeIcon icon={faEnvelope} className="h-6 text-red-500" />
                                        <input type="email" name="" id="" autoComplete="off"
                                            className=" focus:border-blue-500 focus:outline-none px-4 w-86 placeholder-gray-400" placeholder="John Doe"
                                            {...register('email', {
                                                required: { value: true, message: "Email is required" },
                                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" },
                                            })}
                                        />
                                    </div>
                                    <p className='text-red-500 ml-3'>{errors.email?.message}</p>
                                </div>

                                <div className="space-y-2">
                                    <h2 className="ml-2">Email</h2>
                                    <div className="flex items-center border border-gray-300 bg-white rounded-3xl px-4 py-2 w-[430px]">
                                        <FontAwesomeIcon icon={faEnvelope} className="h-6 text-red-500" />
                                        <input type="email" name="" id="" autoComplete="off"
                                            className=" focus:border-blue-500 focus:outline-none px-4 w-86 placeholder-gray-400" placeholder="Enter your email"
                                            {...register('email', {
                                                required: { value: true, message: "Email is required" },
                                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" },
                                            })}
                                        />
                                    </div>
                                    <p className='text-red-500 ml-3'>{errors.email?.message}</p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="ml-2">Password</h2>
                                    <div className="flex items-center border border-gray-300  rounded-3xl px-4 py-2 w-[430px]">
                                        <FontAwesomeIcon icon={faLock} className="h-6 text-red-500" />
                                        <input type="password" name="" id="" autoComplete="off"
                                            className="focus:border-blue-500 focus:outline-none px-4 placeholder-gray-400" placeholder="******"
                                            {...register('password', {
                                                required: { value: true, message: "Password is required" },
                                                minLength: { value: 5, message: "Minimum 4 characters required" },
                                                maxLength: { value: 15, message: "Maximum 15 characters allowed" },
                                                pattern: {
                                                    value: /^(?=.*[0-9])(?=.*[@$!%*?&]).{4,}$/,
                                                    message: "Must start with capital letter, contain at least 1 number and 1 special character"
                                                }
                                            })}
                                        />
                                        <span>
                                            <FontAwesomeIcon icon={showPassword ? faSlash : faEye} className="ml-36 justify-end cursor-pointer"></FontAwesomeIcon>
                                        </span>
                                    </div>
                                    <p className='text-red-500 ml-3 text-sm whitespace-pre-line'>{errors.password?.message.replace(/, /, ',\n')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-x-2 mt-6">
                            <input type="checkbox" name="" id="" className="ml-2 border-gray-400" />
                            <span>Remember Me</span>
                        </div>

                        <div className="mt-5 ml-2 w-full max-w-[500px]">
                            <button type="submit" className="bg-red-500 text-white hover:bg-red-700 text-center font-semibold rounded-3xl px-2 py-2 w-96 cursor-pointer ">Sign Up</button>
                        </div>
                        <div className="mt-6 ml-14">
                            <h2>Already have an account? <span className="font-semibold text-pink-600 hover:underline cursor-pointer" onClick={login}>Login</span></h2>
                        </div>
                    </form>
                </div>
                <div className="my-20">
                    <Image src={Login_Image} alt="" className="w-96 rounded-2xl cursor-pointer"></Image>
                </div>
            </div>
        </div>
    )
}