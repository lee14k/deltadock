import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function LoadingDocks () {
    return (
        <div className="gradientpaletoblue">
            <Navbar/>
            <h1></h1>
            <div className="grid lg:grid-cols-2 ">

                <div className="flex flex-col gap-12">
                    <h1 className={`${libre.className} text-4xl lg:text-8xl text-blue-900 font-bold`}>
                        Loading Docks
                    </h1>
                    <ul className="text-lg lg:text-xl">
                        <li> We can install, service, and repair broken springs, cables, hinges, and/or rollers, torison
                            spring conversions, weatherstrip, and bottom seals.</li>
                        <li>  Let our technicians come out for a yearly tune up on your garage doors and openers. </li>
                    </ul>
                </div>
                <div>
                    <ArchShape imageSrc="/loadingdd.jpg" patternId="dd-loading"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}