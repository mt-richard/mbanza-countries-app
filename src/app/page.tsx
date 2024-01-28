"use client"

import SearchBar from "@/components/Forms/Search";
import SelectBox from "@/components/Forms/Select";
import CountryBadge from "@/components/countryBadge/page";
import Navbar from "@/components/navBar/page";
import HomePage from "@/components/Display/countryData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <Navbar/>
      <div className="md:flex justify-between md:px-20 px-5 py-10">
        <SearchBar/>
        <SelectBox/>
      </div>
      
      <div>
        {/* all countries */}
         <HomePage/>
      </div>
     
        
    </main>
  );
}
