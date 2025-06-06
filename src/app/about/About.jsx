import Image from "next/image";
import leaf from "../../assets/leaf.webp";
import hybrid from "../../assets/hybrid.webp";
import approach from "../../assets/approach.webp";
import transform from "../../assets/transform.webp";

export default function About() {

    return (

        <div className="p-24">
            <div className="text-center">
                <h2 className="text-5xl font-bold">About Skill Capital</h2>
                <h2 className="font-normal mt-10">Skill Capital is an AI-driven skilling platform designed to make high-quality learning </h2>
                <h2>affordable and accessible to everyone, everywhere.</h2>
            </div>

            <div className="text-center p-14">
                <h2 className="text-4xl text-pink-600 font-semibold">Key Features of Skill Capital</h2>
            </div>

            <div className="flex justify-between items-start flex-wrap px-10 py-6">
                <div className="max-w-2xl">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">AI-Powered Personalisation</h2>

                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-start space-x-4">
                            <Image src={leaf} alt="" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Smart course recommendations tailored to individual</h2>
                                <h2 className="text-xl font-normal">goals and industry trends.</h2>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Image src={leaf} alt="" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Personalized learning paths that adapt to your progress</h2>
                                <h2 className="text-xl font-normal">and feedback.</h2>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Image src={leaf} alt="" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">AI-driven career roadmaps.</h2>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Image src={leaf} alt="" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Wide range of courses across Design, Marketing,</h2>
                                <h2 className="text-xl font-normal">Technology, Business, Study Abroad, and Life Skills.</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-6">
                    <Image src={hybrid} alt="Hybrid" className="w-[600px] h-[400px] object-cover" />
                </div>

            </div>

            <div className="flex justify-around items-start flex-wrap mt-6">
                <div>
                    <Image src={approach} alt="approach"></Image>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">Flexible, Engaging & Accessible Video</h2>
                    <h2 className="text-3xl font-bold">Learning</h2>
                    
                    <div className="flex items-start space-x-4 mt-6">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal mt-1">High-quality video content available on-demand.</h2>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 mt-6">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal mt-1">Self-paced learning modules to fit your schedule.</h2>
                            </div>
                        </div>

                         <div className="flex items-start space-x-4 mt-6">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal mt-1">Lifetime access to purchased courses.</h2>
                            </div>
                        </div>

                         <div className="flex items-start space-x-4 mt-6">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Multi-device compatibility for learning anytime,</h2>
                                <h2 className="text-xl font-normal ">anywhere.</h2>
                            </div>
                        </div>
                </div>

            </div>

            <div className="flex justify-between items-start flex-wrap px-10 py-6">
                <div className="max-w-2xl mt-14 ml-14">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">Career Support & Future Readiness</h2>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center space-x-3">
                            <Image src={leaf} alt="" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Mock interviews with AI feedback.</h2>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Resume building & Job application guidance.</h2>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Real-time job matching.</h2>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Image src={leaf} alt="leaf" className="h-10 w-10"></Image>
                            <div>
                                <h2 className="text-xl font-normal">Affordable and Accessible Education</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-6">
                    <Image src={transform} alt="transform" className="w-[600px] h-[400px] object-cover" />
                </div>

            </div>

        </div>
    )
}