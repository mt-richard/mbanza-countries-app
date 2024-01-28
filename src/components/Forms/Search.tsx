import { IoMdSearch } from "react-icons/io";


export default function SearchBar(){
    return(
        <div className="text-gray-700 ">
            <span className="absolute m-4 text-xl">
                <IoMdSearch />
            </span>
            <input type="search" name="search" id="search" placeholder="Search here ....." className="p-3 px-12 w-[500px] rounded outline-none border border-collapse"/>
        </div>
    )
}