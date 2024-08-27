import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import HeadshotCircle from "@/components/FrontEnd/HeadshotCircle";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center">
                <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold`} >Our Team</h1>
                <p className="py-10 text-4xl mx-24 text-center">Click to learn more about our crew</p>
            </div>
                <HeadshotCircle/>
            <Footer/>
        </div>
    )
}