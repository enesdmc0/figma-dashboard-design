import React from 'react';
import {Bitcoin} from "lucide-react";
import {FaBitcoin} from "react-icons/fa";
import {BiTrendingUp} from "react-icons/bi";
import CardTitle from "@/components/CardTitle";



const CryptoTrade = () => {
    return (
        <div className="col-span-3">
            <CardTitle title="Crypto Trade Signals" upDown color="#F7931A" icon={Bitcoin} minText/>

            <div className="flex bg-white rounded-md shadow-xl p-3 pt-5 space-y-5 flex-col">
                <div className="font-semibold text-sm">1242 Content</div>
                <div className="bg-[#F5F7F8] rounded-md p-4 space-y-4">
                    <div className="border-b pb-5 flex">
                        <div className="flex gap-2 items-center">
                            <FaBitcoin className="h-6 w-6 text-[#F7931A]"/>
                            <span className="font-semibold ">Bitcoin</span>
                        </div>
                        <div className="ml-auto flex gap-1 items-center">
                            <span className="font-semibold">$0.218 </span>
                            <BiTrendingUp className="rounded-md bg-green-700 w-5 h-5 p-0.5"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <span className="text-center text-sm font-semibold">15 m Signals</span>
                        <div className="flex items-center justify-between">

                            <div className="rounded-xl flex items-center justify-center flex-col bg-white p-2.5">
                                <div style={{background: `conic-gradient(rgb(250, 110, 222) ${50}%, #f5f4f5 ${50}%`}}
                                     className="w-16 h-16 rounded-full flex items-center justify-center">
                                    <div className=" w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                        %50
                                    </div>
                                </div>
                                <p className="mt-3 text-xs font-semibold">Indicator Score</p>
                            </div>

                            <div className="rounded-xl flex items-center justify-center flex-col bg-white p-2.5">
                                <div style={{background: `conic-gradient(rgb(139, 23, 199) ${34}%, #f5f4f5 ${34}%`}}
                                     className="w-16 h-16 rounded-full flex items-center justify-center">
                                    <div className=" w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                        %34
                                    </div>
                                </div>
                                <p className="mt-3 text-xs font-semibold">Total Score</p>
                            </div>
                        </div>
                        <button className="bg-[#68F899] p-2 rounded-md font-semibold">BUY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoTrade;
