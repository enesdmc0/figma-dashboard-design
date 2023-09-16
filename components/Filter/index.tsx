import React from 'react';
import {AlignHorizontalSpaceAround, Bitcoin, FileText} from "lucide-react";
import {BsDiscord} from "react-icons/bs";
import {GrReddit} from "react-icons/gr";

const data = [
    {text: "7SL News", icon: FileText, color: "#BD68F8"},
    {text: "Crypto Trade Signals", icon: Bitcoin, color:"#F7931A"},
    {text: "Articles", icon: AlignHorizontalSpaceAround, color:"#151515"},
    {text: "Alpha Calls", icon: BsDiscord, color: "#5865F2"},
    {text: "Discussion", icon: GrReddit, color:"#FF4500"},
]

const Filter = () => {
    return (
        <div className="flex items-center justify-between rounded-md bg-white">
            {data.map(item => (
                <div key={item.text} style={{color: `${item.color}`}} className={`flex items-center justify-between pl-3 w-full p-2 ${item.text !== "Discussion" && "border-r"} `}>
                    <div className="flex items-center gap-2">
                        <item.icon className="h-5 w-5"/>
                        <p className="text-xs">{item.text}</p>
                    </div>
                    <div>
                        <div className="w-10 h-6 bg-[#FA36F6] cursor-pointer rounded-full">
                            <div className="h-6 w-6 rounded-full flex items-center mx-1">
                                <span className="h-4 w-4 bg-white rounded-full p-0.5 text-black"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Filter;
