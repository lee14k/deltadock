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
                <div className="grid grid-cols-2 mx-6 pb-24">
                    <div className="flex flex-col justify-center items-start text-left">
                        <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold`}>Our Work</h1>
                        <p className="py-10 text-4xl mr-10"> Our work showcases the craftsmanship and
                            attention
                            to detail that defines Delta Dock and Door. Browse through our gallery to see the impact a
                            new
                            door can leave on any home.</p>
                        <Link href="/contact">
                            <button
                                className={`border-2 border-doorange rounded-full hover:bg-white text-white text-3xl font-bold py-2 px-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-full`}>Schedule
                                your consultation
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Slideshow/>

                    </div>

                </div>
                <div className="flex justify-center items-center flex-col">
                <h1 className={`${libre.className} text-2xl lg:text-8xl font-bold`}>Before & After</h1>
                    <p className="py-10 text-4xl mx-24 text-center">Explore our before and after photos to see the
                        transformations we’ve brought to homes just like yours. Whether you’re looking for a new
                        installation or you're just looking for a tune-up, our work speaks for itself.</p>
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