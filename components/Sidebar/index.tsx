import React from 'react';
import {AlignCenterVertical, BarChart2, Copy, Home, LogOut, Settings, Sun} from "lucide-react";


const data = [Home, Settings, BarChart2, Copy]

const Sidebar = () => {
    return (
        <div className="w-24 fixed top-0 left-0 rounded-l-3xl h-full border py-6 flex items-center text-white flex-col justify-between bg-gradient-to-b from-[#FA36F6] to-[#8098FA]">
            <div className="flex flex-col items-center gap-16">
                <AlignCenterVertical className="h-7 w-7"/>
                <div className="flex flex-col gap-5">
                    {data.map((Icon, i) => (
                        <span  className={`p-2 cursor-pointer rounded-xl ${Icon === Copy ? "bg-white text-pink-300/60" : "bg-pink-200/60 text-white"} `} key={i}>
                            <Icon/>
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 ">
                <div className="w-10 h-6 bg-white rounded-full cursor-pointer">
                    <div className="h-6 w-6 rounded-full flex items-center mx-1">
                        <Sun className=" h-4 w-4 bg-gray-200 rounded-full p-0.5 text-black"/>
                    </div>
                </div>
                <span className="p-2 rounded-xl bg-blue-200/60"><LogOut/></span>
            </div>
        </div>
    );
};

export default Sidebar;
