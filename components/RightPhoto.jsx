import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function LeftPhoto() {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <h1 className={`${libre.className} text-8xl text-blue-900`}>
          Quality doors, professional service
        </h1>
      </div>
      <div className="flex flex-col gap-12">
        <ArchShape />
      </div>
    </div>
  );
}
