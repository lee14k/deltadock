import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function LoadingDocks () {
    return (
        <div className="gradientbluetoorange text-white">
                <Navbar/>
            <div className="grid lg:grid-cols-2 ">
                <div >
                    <ArchShape imageSrc="/dd-custom-paint-3.jpg" patternId="uniquePatternPaint"/>

                </div>
                <div className="flex flex-col gap-12">
                    <h1 className={`${libre.className} text-4xl lg:text-8xl text-white font-bold`}>
                        Custom Painting
                    </h1>
                    <p className="text-lg lg:text-xl">
                        We can install, service, and repair broken springs, cables, hinges, and/or rollers, torison spring conversions, weatherstrip, and bottom seals.
                    </p>
                    <p className="text-lg lg:text-xl">
                        Let our technicians come out for a yearly tune up on your garage doors and openers.        </p>

                </div>
            </div>
            <Footer/>
        </div>
    )
}