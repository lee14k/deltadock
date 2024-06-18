import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
export default function HomeHeader() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <ArchShape />
      </div>
      <div className="flex flex-col gap-12">
        <Image
        src='/dddlogo.png'
        alt='logo'
        width={100}
        height={100}
        />
        <h1>Quality doors, professional service</h1>
        <button>
            Contact Us
        </button>
      </div>
    </div>
  );
}
