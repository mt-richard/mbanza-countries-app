
import React from "react"
export default function CountryBadge({ flag,name,population,region,capital}: any){
    return(
        <div className="text-gray-700 border border-collapse rounded-lg">
            <div className="h-60">
                <img src={flag} alt="" className="rounded h-56 w-full object-cover" />
            </div>
            <div className="px-8 py-2">
                <h2 className="font-bold  py-2">{name}</h2>
                <ul >
                    <li className="text-sm leading-6"><span className="font-semibold">Population:</span> {population}</li>
                    <li className="text-sm leading-6"><span className="font-semibold">Region:</span> {region}</li>
                    <li className="text-sm leading-6"><span className="font-semibold">Capital:</span> {capital}</li>
                </ul>
            </div>
        </div>
    )
}