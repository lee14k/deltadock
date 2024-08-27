import Image from "next/image";
import ThreeCol from "@/components/ThreeCol";
import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import { Libre_Caslon_Display } from "next/font/google";
import Link from "next/link";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function OurServices() {
    return (
        <div className="homeheaderbg grid grid-cols-1">
            <Navbar/>
            <h1 className={`${libre.className} text-center text-7xl font-bold font-bold`}>
                Our Services
            </h1>
            <p></p>
            <ThreeCol/>

            <Footer/>
        </div>
    );
}
