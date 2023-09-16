import React from 'react';
import {ArrowLeft, ArrowRight, Bitcoin} from "lucide-react";
import {FaBitcoin} from "react-icons/fa";
import {BiTrendingUp} from "react-icons/bi";

const CryptoTrade = () => {
    return (
        <div className="col-span-3">
            <div className="flex items-center justify-between ">
                <div className="flex items-center border rounded-t-md px-2 py-2 gap-2 bg-purple-700 text-white">
                    <Bitcoin className="w-5 h-5"/>
                    <p className="text-sm font-semibold">Crypto Trade Signals</p>
                </div>
                <div className="flex items-center gap-2">
                    <ArrowLeft className="p-1 rounded-full bg-white"/>
                    <ArrowRight className="p-1 rounded-full bg-white"/>
                </div>
            </div>
            <div className="flex bg-white p-3 space-y-3 flex-col">
                <div className="font-semibold text-sm">1242 Content</div>
                <div className="bg-gray-100 rounded-md p-4 space-y-4">
                    <div className="border-b pb-5 flex">
                        <div className="flex gap-2 items-center">
                            <FaBitcoin className="h-6 w-6"/>
                            <span className="font-semibold ">Bitcoin</span>
                        </div>
                        <div className="ml-auto flex gap-1 items-center">
                            <span className="font-semibold">$0.218 </span>
                            <BiTrendingUp className="rounded-md bg-green-700 w-5 h-5 p-0.5"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <span className="text-center text-sm font-semibold">15 m Signals</span>
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl flex items-center justify-center flex-col bg-white p-2.5">
                                <div style={{background: `conic-gradient(rgb(8,145,170) ${50}%, #ddd ${50}%`}}
                                     className="w-16 h-16 rounded-full flex items-center justify-center">
                                    <div className=" w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                        % 50
                                    </div>
                                </div>
                                <p className="mt-3 text-xs font-semibold">Indicator Score</p>
                            </div>
                            <div className="rounded-xl flex items-center justify-center flex-col bg-white p-2.5">
                                <div style={{background: `conic-gradient(rgb(8,145,170) ${50}%, #ddd ${50}%`}}
                                     className="w-16 h-16 rounded-full flex items-center justify-center">
                                    <div className=" w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                        % 50
                                    </div>
                                </div>
                                <p className="mt-3 text-xs font-semibold">Indicator Score</p>
                            </div>
                        </div>
                        <button className="bg-green-300 p-2 rounded-md font-semibold">BUY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoTrade;
