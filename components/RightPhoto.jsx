import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import GoogleReviews from "./GoogleReviews";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function RightPhoto() {
  return (
    <div className="grid lg:grid-cols-2 three-icon-home">
      <div>
        <h1 className={`${libre.className} font-bold my-4 text-8xl text-white`}>
Don't just take our word for it!        </h1>
        <GoogleReviews />
      </div>
      <div className="flex flex-col gap-12">
        <ArchShape />
      </div>
    </div>
  );
}
