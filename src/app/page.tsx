"use client"

import Navbar from "@/components/navBar/page";
import HomePage from "@/components/Display/countryData";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <Navbar/>
      <div>
        {/* all countries */}
         <HomePage/>
      </div>
        
    </main>
  );
}
