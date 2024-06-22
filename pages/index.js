import Image from "next/image";
import { Inter } from "next/font/google";
import ThreeCol from "@/components/ThreeCol";
import HomeHeader from "../components/HomeHeader";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <HomeHeader/>
    <ThreeCol/>

    </div>
  );
}
