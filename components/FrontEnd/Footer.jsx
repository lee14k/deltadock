import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import Link from "next/link";
const Footer = () => {
  return (
    <div className="">
    <div className={`footerwrapper bg-orange-50 grid lg:flex lg:flex-col justify-center  `}>
      <div className="mx-24" >
        <h1 className={`text-6xl`}>Delta Dock & Doors</h1>
        <div className="flex flex-col text-xl">
        <span >(906) 221-5371</span>
        <span>bluemystiquerentals@gmail.com</span>
        <Link href='https://www.facebook.com/bluemystiquerentals'>
        <FacebookTwoToneIcon fontSize="large"/>
        </Link>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Footer;
