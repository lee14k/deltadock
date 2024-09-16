import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import Slider from "@/components/Slider"
import Slideshow from "@/components/FrontEnd/Slideshow"
import { Libre_Caslon_Display } from "next/font/google";
import Link from "next/link";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className=" ">
                <div className="grid lg:grid-cols-2 lg:mx-6 pb-24 my-12 lg:gap-36">
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 className={`${libre.className} text-6xl lg:text-8xl font-bold`}>Our Work</h1>
                        <p className="py-10 text-2xl lg:mx-0 mx-6 lg:text-4xl lg:mr-10"> Our work showcases the craftsmanship and
                            attention
                            to detail that defines Delta Dock and Door. Feel free to flip through our gallery to see the impact a
                             garage door can leave on any home or business.</p>
                        <Link href="/contact">
                            <button
                                className={`border-2 border-doorange rounded-full hover:bg-white text-white text-3xl font-bold py-2 px-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-full invisible lg:visible`}>Schedule
                                your consultation
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10">
                        <Slideshow/>
                        <Link href="/contact">
                            <button
                                className={`border-2 border-doorange rounded-full hover:bg-white text-white text-3xl font-bold py-2 px-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-full lg:invisible visible`}>Schedule
                                your consultation
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="flex justify-center items-center flex-col">
                <h1 className={`${libre.className} text-6xl lg:text-8xl font-bold`}>Before & After</h1>
                    <p className="py-10 text-2xl lg:mx-0 mx-6 lg:text-4xl lg:mr-10">Explore our before and after photos to see the
                        transformations we’ve brought to homes just like yours. Whether you’re looking for a new
                        installation or you're just looking for a tune-up, we've got you covered.</p>
                    <Link href="/our-services">
                        <button
                            className={`border-2 border-doorange rounded-full hover:bg-white text-white text-3xl font-bold py-2 px-4 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-full`}>Learn
                            more about our services
                        </button>
                    </Link>
                    <div className="my-10">
                        <Slider/>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}