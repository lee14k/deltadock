import Image from "next/image";
import ThreeCol from "@/components/ThreeCol";
import HomeHeader from "../components/HomeHeader";
import ThreeColIcon from "@/components/ThreeColIcon";
import LeftPhoto from "@/components/LeftPhoto";
import RightPhoto from "@/components/RightPhoto";
import Navbar from "@/components/FrontEnd/Navbar";
import ContactFill from "@/components/FrontEnd/ContactFill";
import Footer from "@/components/FrontEnd/Footer";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
      <div className="homeheaderbg grid grid-cols-1">
          <Navbar/>
          <HomeHeader/>
          <h1 className={`${libre.className} text-center text-7xl font-bold font-bold`}>Our Services</h1>
              <ThreeCol/>
              <ThreeColIcon/>
              <LeftPhoto/>
              <RightPhoto/>
              <ContactFill/>
              <Footer/>
      </div>
);
}
