import { IoMdSearch } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Navbar(){
    return(
        <div className="flex justify-between items-center bg-white py-2 md:px-20 px-5 border-b border-b-gray-300 ">
            <div>
                <h1 className="md:text-xl text-md text-gray-900 font-black">Where in the world?</h1>
            </div>
            <div className="py-2 md:px-3 text-gray-900 flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:font-[600] md:text-md text-sm">
            <MdOutlineDarkMode className="w-7 h-5" /> 
            <span className="text-center  m-1">Dark Mode</span> 
            </div>
        </div>
    )
}
