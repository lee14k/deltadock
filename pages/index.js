import Image from "next/image";
import { Inter } from "next/font/google";
import ThreeCol from "@/components/ThreeCol";
import HomeHeader from "../components/HomeHeader";
import ThreeColIcon from "@/components/ThreeColIcon";
import LeftPhoto from "@/components/LeftPhoto";
import RightPhoto from "@/components/RightPhoto";
import Navbar from "@/components/FrontEnd/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeHeader />
      <ThreeCol />
      <ThreeColIcon />
      <LeftPhoto />
      <RightPhoto />
    </div>
  );
}
