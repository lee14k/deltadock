import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
import CheckIcon from '@mui/icons-material/Check';

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function LoadingDocks () {
    return (
        <div className="gradientpaletoblue">
            <Navbar/>
            <div className="grid lg:grid-cols-2 ">
            <span className="lg:hidden block">
                    <ArchShape imageSrc="/loadingdd.jpg" patternId="dd-loading1"/>
                </span>
                <div className="flex flex-col gap-12 justify-center items-center">
                    <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold text-center mx-12`}>
                        Loading Docks
                    </h1>
                    <div className="my-6 mx-12 flex flex-col gap-16 text-2xl">
                        <div className="flex gap-12">
                            <CheckIcon className="text-orange-500 text-5xl"/>
                            <p>We service, repair and install dock levelers, truck restraints, edge of dock (EOD) plates, bumpers, dock seals, and
                                scissor lift docks. </p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-orange-500 text-5xl"/>
                            <p>Let's get your doors and docks on a preventative maintenance schedule. Schedule an estimate today!</p>
                        </div>

                        <Link href="/contact">
                            <button
                                className={`border-2 border-blue-900 rounded-full hover:bg-white text-white text-4xl  font-bold py-2 px-12 bg-blue-900  hover:text-blue-900  transition-colors duration-300 ${libre.className} w-full`}>
                                Call to schedule your estimate!
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <ArchShape imageSrc="/loadingdd.jpg" patternId="dd-loading"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}