import React from 'react';
import {Bell, Search, SlidersHorizontal} from "lucide-react";
import Image from "next/image"

const data = [
    {text: "Cryipto", color: "#F7931A1F"},
    {text: "CryiptoMinig", color: "#FA36F61F"},
    {text: "CryiptoMinig", color: "#3BCFFD1F"},
    {text: "Minig", color: "#F7931A1F"},
    {text: "CryiptoMinig", color: "#FA36F61F"},
    {text: "Dominance", color: "#3BCFFD1F"},
]

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div className="flex bg-white  rounded-md">
                    <input placeholder="Search"
                           className="bg-transparent outline-none px-2 py-1.5 text-gray-400 text-sm font-semibold"/>
                    <span
                        className="bg-purple-500 text-white cursor-pointer rounded-md flex items-center justify-center p-1">
                    <Search className="h-6 w-6"/>
                </span>
                </div>
                <div className="flex items-center gap-2">
                    {data.map(item => (
                        <div key={item.text} className="rounded-full py-1 px-2 text-xs text-gray-500"
                             style={{background: `${item.color}`}}>#{item.text}</div>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex text-blue-500 gap-2">
                    <SlidersHorizontal/>
                    <Bell/>
                </div>
                <div className="flex items-center gap-2 border-l pl-5">
                    <div className="relative h-10 w-10 p-1 rounded-full bg-white">
                        <Image fill src="/metamesk.png" alt=""/>
                    </div>
                    <p className="text-sm">0x14...767a</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
