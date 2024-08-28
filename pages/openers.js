import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
import CheckIcon from '@mui/icons-material/Check';
export default function Openers () {
    return (
        <div className="gradientpaletoorange">
            <Navbar/>
            <div className="grid lg:grid-cols-2">
      <div className="">
        <ArchShape imageSrc="/dd_openers.jpg" patternId="dd-openers" />
      </div>
                <div className="flex flex-col gap-12 justify-center items-center">
                    <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold text-center mx-12`}>
                        Openers
                    </h1>
                    <div className="my-6 mx-12 flex flex-col gap-16 text-2xl ">
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p>We carry most universal remotes and keypads in stock. Our residential openers line is
                                WiFi
                                compatible.
                            </p></div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p> 1/2HP or 3/4HP chain or belt drive trolley openers.
                            </p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p>
                                Jack Shaft/Side Mount Openers
                                Commercial Trolley and Hoist Operators
                            </p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p>Side mount and jack shaft openers for high-lifted or full vertical lift doors.</p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p> Dealers of LiftMaster and Manaras openers.
                            </p>
                        </div>
                        <div className="flex gap-12">
                            <CheckIcon className="text-blue-900 text-5xl"/>
                            <p> We can program MOST car and truck buttons for your remotes or keypads.
                            </p>
                        </div>


                        <Link href="/contact">
                            <button
                                className={`border-2 border-blue-900 rounded-full hover:bg-white text-white text-4xl  font-bold py-2 px-12 bg-blue-900  hover:text-blue-900  transition-colors duration-300 ${libre.className} w-full`}>
                                Call to schedule your estimate!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}