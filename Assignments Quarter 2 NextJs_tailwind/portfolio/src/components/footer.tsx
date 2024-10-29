import Image from "next/image";
import logo from "../assets/_538575df-84ae-49ca-94ae-9375ea2d446f.png"
const Footer = () => {
    return (
      <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="flex items-center justify-between mx-auto px-4">
        <Image src={logo} alt={"logo"} width={65} height={65}/>
          <p className="text-slate-700">All right reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;