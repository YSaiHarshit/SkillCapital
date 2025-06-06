import Image from "next/image"

export default function SignUp() {

    return (

        <div className="fixed inset-0 bg-black/70 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-pink-100  rounded-2xl p-6 mt-2 w-full max-w-[410px]">
                <button className="absolute top-2 right-4 text-black font-medium text-2xl cursor-pointer justify-end"
                // onClick={handleClose}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mt-2 ml-1">Please Sign Up Here</h2>

                <form action="" className="mt-6 ml-1">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl text-slate-800">Email <span className="text-red-500">*</span></h2>
                            <input type="text" name="" id="" className="border border-pink-400 focus:outline-none bg-white w-86 rounded-md px-2 py-2 " placeholder="Enter Your Email" />
                        </div>

                        <div className="flex border border-pink-400 focus:outline-none bg-white w-86 rounded-md px-2 py-2">
                            <div className="flex items-center px-2 bg-white border-r border-red-300">
                                <Image></Image>
                                <select className="text-sm outline-none bg-white cursor-pointer">
                                    <option value="">+91</option>
                                    <option value="">+1</option>
                                    <option value="">+44</option>
                                </select>
                            </div>
                            <h2 className="text-xl text-slate-800">Phone <span className="text-red-500">*</span></h2>
                            <input type="number" name="" id="" className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
                                placeholder="Enter Mobile Number" />
                        </div>

                        <div>
                            <h2 className="text-xl text-slate-800">Select Your Course <span className="text-red-500">*</span></h2>
                            <input type="text" name="" id="" className="border border-pink-400 focus:outline-none bg-white w-86 rounded-md px-2 py-2" placeholder="Select a Course" />
                        </div>

                        <div>
                            <button className="border border-gray-200 bg-red-500 hover:bg-red-700 px-4 py-4 rounded-lg w-86 text-slate-200 text-center cursor-pointer">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}