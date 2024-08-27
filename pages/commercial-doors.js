import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function CommercialDoors () {
    return (
        <div className="gradientpaletoblue">
            <Navbar/>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col gap-12 justify-center items-center">
                    <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold text-center mx-12`}>
                        Commercial Doors
                    </h1>
                    <div className="flex flex-col gap-12">
                        <div className="my-6 mx-12 flex flex-col gap-16 text-2xl">
                            <div className="flex gap-12">
                                <CheckIcon className="text-orange-500 text-5xl"/>
                                <p className="">
                                    We can install, service, and repair broken springs, cables, hinges, and/or rollers,
                                    torison spring conversions, weatherstrip, and bottom seals.
                                </p>
                            </div>
                            <div className="flex gap-12">
                                <CheckIcon className="text-orange-500 text-5xl"/>
                                <p className="text-wh">
                                    Let our technicians come out for a yearly tune up on your garage doors and
                                    openers. </p>
                            </div>
                        </div>
                        <button
                            className={`border-2 border-doorange rounded-full hover:bg-white text-white text-4xl font-bold py-2 px-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-full`}>Call
                            Katrina for your custom consultation!
                        </button>
                    </div>

                </div>
                <ArchShape imageSrc="dd-commercial.jpeg" patternId="dd-commercial"/>
            </div>
            <Footer/>
        </div>
    )
}