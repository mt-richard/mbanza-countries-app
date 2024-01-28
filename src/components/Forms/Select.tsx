'use client'

import React from "react"

export default function SelectBox(){
    return(
        <div className="text-gray-700 ">
            <select name="region" id="reg" className="py-3 px-5 rounded border border-collapse outline-none">
                <option value="" className="p-2 w-20" selected>Filter by Region</option>
                <option value="" className="">America</option>
                <option value="" className="">America</option>
                <option value="" className="">America</option>
                <option value="" className="">America</option>
            </select>
        </div>
    )
}