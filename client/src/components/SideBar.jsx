import { MdOutlineSportsCricket } from "react-icons/md";
import { PiSpeakerHigh } from "react-icons/pi";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import './sideBar.css'
function SideBar() {
    return (
        <div className="sidebar flex-initial bg-neutral-800 px-10 h-screen w-50 text-white">
            <div className="sidebarWrapper mt-8">
                <ul className="flex flex-col items-center space-y-10">
                    <li className="flex justify-between items-center space-x-4"> 
                        <span>Technologies</span>
                        <IoCodeSlashSharp size={20}/>
                    </li>
                    <li className="flex justify-between items-center space-x-4"> 
                        <span>Politics</span>
                        <PiSpeakerHigh size={20}/>
                    </li>
                    <li className="flex justify-between items-center space-x-4"> 
                        <span>Animals</span>
                        <GiPlantsAndAnimals size={20}/>
                    </li>
                    <li className="flex justify-between items-center space-x-4"> 
                        <span>Education</span>
                        <FaBook size={20}/>
                    </li>
                    <li className="flex justify-between items-center space-x-4"> 
                        <span>Sports</span>
                        <MdOutlineSportsCricket size={20}/>
                    </li>
                   
                </ul>
            </div>
            
        </div>
    )
}

export default SideBar
