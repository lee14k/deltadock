import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import HeadshotCircle from "@/components/FrontEnd/HeadshotCircle";
import { Libre_Caslon_Display } from "next/font/google";
import Image from "next/image";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center">
                <h1 className={`${libre.className} text-6xl lg:text-8xl font-bold py-8 mb-10`} >Our Team</h1>
                <p className="lg:text-4xl lg:mx-24 text-center invisible lg:visible">Click each photo to get to know our Delta Door & Dock family!</p>
            </div>
            <div className="py-6">
                <HeadshotCircle/>
                <div className="flex justify-center items-center py-6">
                    <Image src="/3981-Group-Super.jpg" width={1200} height={300} alt="" className=" rounded-2xl"/>

                </div>
            </div>
            <Footer/>
        </div>
    )
}