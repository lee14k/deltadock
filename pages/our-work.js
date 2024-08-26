import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import Slider from "@/components/Slider"
import Slideshow from "@/components/FrontEnd/Slideshow"
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center flex-col">
                <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold`}>Our Work</h1>
                <p>copy here</p>
                <Slideshow/>
                <h1 className={`${libre.className} text-2xl lg:text-8xl font-bold`}>Before & After</h1>
                <p>copy here</p>
                <Slider/>
            </div>
            <Footer/>
        </div>
    )
}