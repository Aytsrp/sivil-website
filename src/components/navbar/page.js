import Link from "next/link";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-4">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">Profile Website</Link>
        </div>
        <div className="flex-none">
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="dracula" />
            <IoSunnyOutline className="swap-off h-7 w-7 fill-current"/>
            <IoMoonOutline className="swap-on h-7 w-7 fill-current"/>
          </label>
        </div>
      </div>
    </>
  );
};
export default Navbar;
