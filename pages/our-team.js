import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import HeadshotCircle from "@/components/FrontEnd/HeadshotCircle";

export default function OurTeam () {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl my-6">Our Team</h1>
            </div>
                <HeadshotCircle/>


            <Footer/>
        </div>
    )
}