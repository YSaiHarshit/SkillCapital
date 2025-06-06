import Image from "next/image";
import Navbar from "./navbar/Navbar";
import ExploreCourses from "./exploreCourses/ExploreCourses";
import TrendingCourses from "./trendingCourses/TrendingCourses";
import About from "./about/About";
import Growing from "./growing/Growing";
import Footer from "./footer/Footer";
import CopyRight from "./copyRight/CopyRight";

export default function Home() {
  return (
   <div>
    <Navbar />
    <ExploreCourses / >
    <TrendingCourses />
    <About / >
    <Growing / >
    <Footer / >
    <CopyRight />
   </div>
  );
}
