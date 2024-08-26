import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import Slider from "@/components/Slider"
import Slideshow from "@/components/FrontEnd/Slideshow"
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center flex-col">
                <h1 className={`${libre.className} text-4xl lg:text-8xl font-bold`}>Our Work</h1>
                <p className="py-10 text-4xl mx-24 text-center"> Our work showcases the craftsmanship and attention to detail that defines Delta Dock and Door. Browse through our gallery to see the impact a new door can leave on any home.</p>
                <button>Learn more about what we can offer</button>
                <Slideshow/>
                <h1 className={`${libre.className} text-2xl lg:text-8xl font-bold`}>Before & After</h1>
                <p className="py-10 text-4xl mx-24 text-center">Explore the before and after photos to see the transformations we’ve brought to homes just like yours. Whether you’re looking for a new installation or you're just looking for a tune-up, our work speaks for itself.</p>
                <Slider/>
                <button>Call us today</button>
            </div>
            <Footer/>
        </div>
    )
}