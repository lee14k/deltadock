import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
import CheckIcon from '@mui/icons-material/Check';
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function OverheadGarageDoors () {
    return (
        <div className="gradientpaletoorange">
            <Navbar/>
            <h1></h1>
            <div className="grid lg:grid-cols-2 ">
      <div >
        <ArchShape imageSrc="/dd-overhead.jpg" patternId="overhead-garage" />
      </div>
                <div className="flex flex-col gap-12 justify-center items-center">
                    <h1 className={`${libre.className} text-5xl lg:text-8xl font-bold text-center mx-12`}>
                        Overhead Garage Door Maintenance & Installation
                    </h1>
                    <div className="my-6 mx-12 flex flex-col gap-16 text-2xl">
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p className="">
                                We can install, service, and repair broken springs, cables, hinges, and/or rollers,
                                torison spring
                                conversions, weatherstrip, and bottom seals.
                            </p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p className="">
                                Let our technicians come out for a yearly tune up on your garage doors and openers. </p>
                        </div>
                    </div>
                    <Link href="/contact">
                        <button
                            className={`border-2 border-blue-900 rounded-full hover:bg-white text-white text-4xl  font-bold py-2 px-12 bg-blue-900  hover:text-blue-900  transition-colors duration-300 ${libre.className} w-full mb-6`}>
                            Call to get your consultation today!
                        </button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}