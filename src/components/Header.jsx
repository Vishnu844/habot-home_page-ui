import logo from "../assets/habot-logo.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className="flex px-16 py-5 justify-between">
        <div>
          <img src={logo} alt="logo" className="w-44 h-11 object-cover" />
        </div>
        <div className="flex items-center gap-8">
          <p className="text-p-grey text-sm">Find Suppliers</p>
          <p className="text-p-grey text-sm">
            Find Service Tags <IoIosArrowDown className="inline" />
          </p>
          <button className="w-48 h-12 rounded-md px-2.5 border-solid border-2 border-p-green font-bold text-p-green">
            Login / Sign Up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

// font-family: Inter;
// font-size: 15px;
// font-weight: 700;
// line-height: 24px;
// text-align: center;
