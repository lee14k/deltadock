import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import Slider from "@/components/Slider"
import Slideshow from "@/components/FrontEnd/Slideshow"
export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-6xl">Our Work</h1>
                <p>copy here</p>
                <Slideshow/>
                <h1 className="text-6xl">Before & After</h1>
                <p>copy here</p>
                <Slider/>
                <Footer/>
            </div>
        </div>
    )
}