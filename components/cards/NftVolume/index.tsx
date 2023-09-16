import React from 'react';
import {FaBitcoin, FaEthereum, FaPaypal} from "react-icons/fa";
import {SiBinance, SiDogecoin, SiXrp} from "react-icons/si";
import CardTitle from "@/components/CardTitle";
import {BadgeCheck} from "lucide-react";
import Image from "next/image";

const data = [
    {icon: FaBitcoin, name: "Azuki", volume: 12, fp: 0.02, color: ""},
    {icon: FaEthereum, name: "Doodies", volume: 0.46, fp: 0.16, color: ""},
    {icon: SiBinance, name: "Otherdeed Otherside", volume: 0.5, fp: 4, color: ""},
    {icon: SiDogecoin, name: "Bored Yocht Club", volume: 0.71, fp: 5, color: ""},
    {icon: SiXrp, name: "Meebits8", volume: 2, fp: 0.24, color: ""},
    {icon: FaPaypal, name: "CLONE Takashi", volume: 3, fp: 0.62, color: ""},
    {icon: FaPaypal, name: "Beanz official", volume: 5, fp: 0.08, color: ""},
]

const NftVolume = () => {
    return (
        <div className="col-span-3 flex items-stretch flex-col rounded-md">
            <CardTitle title="NFT Value"  color="#1E1E1E"/>
            <div className="bg-white rounded-md shadow-xl overflow-hidden">
                <ul className="w-full ">
                    {
                        data.map((item, i) => (
                            <li key={i} className={`grid grid-cols-4 text-xs px-2 py-3  ${i % 2 !== 0 ? "bg-[#F5F7F8]" : "bg-white"} `}>
                                <div className="col-span-2 flex items-center gap-1">
                                    <div className="relative h-7 w-7 aspect-square">
                                        <Image src="/volume.avif" alt="" fill className="object-cover " style={{color: `${item.color}`}}/>
                                    </div>
                                    <BadgeCheck className="w-4 h-4 text-sky-400"/>
                                    <span className="text-xs">{item.name}</span>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 ">
                                    <div className="space-y-0.5 col-span-1">
                                        <span className="text-xs">Volume</span>
                                        <p className="text-green-400 font-semibold flex items-center gap-1"> <FaEthereum className="h-5 w-5 text-sky-500"/> {item.volume}</p>
                                    </div>
                                    <div className="space-y-0.5 col-span-1">
                                        <span className="text-xs">FP</span>
                                        <p className="text-green-400 font-semibold flex items-center gap-1"> <FaEthereum className="h-5 w-5 text-sky-500"/> {item.fp}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NftVolume;
