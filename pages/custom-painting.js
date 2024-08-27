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
        <div className="gradientpaletoorange">
                <Navbar/>
            <div className="grid lg:grid-cols-2 ">
                <div >
                    <ArchShape imageSrc="/dd_custom_paint_1-min.jpg" patternId="uniquePatternPaint"/>

                </div>
                <div className="flex flex-col gap-12 justify-center items-center">
                    <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold text-center mx-12`}>
                        Custom Painting
                    </h1>
                    <div className="my-6 mx-12 flex flex-col gap-16 text-2xl">
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p className="">
                                If our suppliers don’t have the PERFECT solid color you had in mind, Katrina will guide
                                you
                                through a color consult with ease. Using only Sherwin-Williams primers and paints, she
                                will
                                get
                                the best finish with one of her two airless sprayers.
                            </p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p className="">
                                Included in her price is prep (like washing), de-glossing, precise taping to ensure
                                perfection,
                                a coat of primer, and two coats of paint. </p>
                        </div>
                        <a href="tel:+9063990891">
                            <button
                                className={`border-2 border-blue-900 rounded-full hover:bg-white text-white text-4xl  font-bold py-2 px-12 bg-blue-900  hover:text-blue-900  transition-colors duration-300 ${libre.className} w-full`}>Call
                                Katrina for your custom consultation!
                            </button>
                        </a>
                    </div>


                </div>

            </div>
            <Footer/>
        </div>
    )
}