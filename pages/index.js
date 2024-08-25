import Image from "next/image";
import ThreeCol from "@/components/ThreeCol";
import HomeHeader from "../components/HomeHeader";
import ThreeColIcon from "@/components/ThreeColIcon";
import LeftPhoto from "@/components/LeftPhoto";
import RightPhoto from "@/components/RightPhoto";
import Navbar from "@/components/FrontEnd/Navbar";
import ContactFill from "@/components/FrontEnd/ContactFill";
import Footer from "@/components/FrontEnd/Footer";

export default function Home() {
  return (
    <div className="homeheaderbg">
      <Navbar/>
      <HomeHeader />
      <ThreeCol />
      <ThreeColIcon />
      <LeftPhoto />
      <RightPhoto />
      <ContactFill />
      <Footer/>
    </div>
  );
}
