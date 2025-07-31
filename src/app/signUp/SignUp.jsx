"use client"
import { useState } from "react"
import Image from "next/image"
import India from "../../assets/India.jpg"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function SignUp() {

    const [isOpen, setisOpen] = useState(true);
        const router = useRouter();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClose = () => {
        setisOpen(false);
    }

    const submit = () => {
        router.push('/courses')
    }


    return (

        <div>
            <div className="fixed inset-0 bg-black/70 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="relative bg-pink-100  rounded-2xl px-7 py-10 mt-2 w-full max-w-[410px]">
                    <div>
                        <button className="absolute top-2 right-4 text-black font-medium text-3xl cursor-pointer justify-end"
                            onClick={handleClose}
                        >
                            &times;
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold mt-2 ml-1">Please Sign Up Here</h2>

                    <form action="" className="mt-6 ml-1" onSubmit={handleSubmit(submit)}>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <h2 className="text-xl text-slate-800">Email <span className="text-red-500">*</span></h2>
                                <input type="email" name="" id="" className="border border-pink-400 focus:outline-none bg-white w-86 rounded-md px-2 py-2 " placeholder="Enter Your Email"
                                    {...register('email', {
                                        required: { value: true, message: "A Valid Email is required" },
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Incorrect Email Format" },
                                    })}
                                />
                                <p className='text-red-500 ml-1'>{errors.email?.message}</p>
                            </div>

                            <div>
                                <h2 className="text-xl text-slate-800">Phone <span className="text-red-500">*</span></h2>
                                <div className="flex focus:outline-none w-86 rounded-md py-2">
                                    <div className="flex items-center  border border-pink-400 rounded-l-md px-2 bg-white border-r">
                                        <Image src={India} alt="" className="h-5 w-5 cursor-pointer"></Image>
                                        <FontAwesomeIcon icon={isOpen ? faCaretDown : faCaretUp} className="cursor-pointer ml-2" />
                                        <select className="text-sm outline-none appearance-none px-2 bg-white cursor-pointer">
                                            <option value="">+91</option>
                                            <option value="">+1</option>
                                            <option value="">+44</option>
                                        </select>
                                    </div>
                                    <input type="number" name="" id="" className="flex-1 border border-pink-400 rounded-r-md bg-white px-3 py-2 text-gray-700 focus:outline-none"
                                        placeholder="Enter Mobile Number"
                                        {...register('number', {
                                            required: "A Valid Phone Number is Required",
                                            pattern: {
                                                value: /^[6-9]\d{9}$/,
                                                message: "A Valid Phone Number is Required"
                                            }
                                        })} />
                                </div>
                                <p className='text-red-500 ml-1'>{errors.number?.message}</p>
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-xl text-slate-800">Select Your Course <span className="text-red-500">*</span></h2>
                                <select name="" id="" className="border border-pink-400 focus:outline-none px-3 py-4 w-86 space-y-6 rounded-md cursor-pointer"
                                    {...register('select', {
                                        required: "Please select a course"
                                    })}
                                >
                                    <option value="">Select a Course</option>
                                    <option value="python" className="gap-4">Python</option>
                                    <option value="devops">DevOps</option>
                                    <option value="react">React JS</option>
                                    <option value="azure">Azure Cloud</option>
                                    <option value="fundamentals">Fundamentals of Tech</option>
                                    <option value="awscloud">AWS Cloud</option>
                                    <option value="awsadvanced">AWS Advanced</option>
                                    <option value="sre">Site Reliability Engineer (SRE)</option>
                                    <option value="sql">SQL</option>
                                    <option value="web">HTML & CSS for Web</option>
                                    <option value="js">JavaScript</option>
                                    <option value="ui/ux">UI/UX</option>
                                    <option value="nextjs">Next JS</option>
                                    <option value="node">Node JS</option>
                                    <option value="expressjs">Express JS</option>
                                    <option value="manual">Manual Testing</option>
                                    <option value="azureadmin">Azure Admin</option>
                                    <option value="azuredevops">Azure Devops</option>
                                    <option value="kubernetes">Kubernetes</option>
                                    <option value="terraform">Terraform</option>
                                </select>
                                <p className='text-red-500 ml-1'>{errors.select?.message}</p>
                            </div>

                            <div className="space-y-1">
                                <button type="submit" className="border border-gray-200 bg-red-500 hover:bg-red-700 px-4 py-4 rounded-lg w-86 text-slate-200 text-center cursor-pointer">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}