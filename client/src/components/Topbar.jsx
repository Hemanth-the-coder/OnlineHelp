import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";;
function Topbar() {
    return (
        <div className="flex items-center px-8 py-2 h-50 justify-between bg-neutral-900 text-white sticky top-0">
            <div className="navbar-left">
                    Logo
            </div>
            <div className="navbar-right flex space-x-5 items-center">
                 <span><FaHome size={30}/></span>
                 <span><FcAbout size= {30}/></span>
                 <span><IoIosContact size={30}/></span>
            </div>
        </div>
    )
}

export default Topbar
