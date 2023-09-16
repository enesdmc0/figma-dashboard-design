import React from 'react';
import {ArrowLeft, ArrowRight, File, Plus} from "lucide-react";
import {FaBitcoin, FaEthereum, FaPaypal} from "react-icons/fa";
import {SiBinance, SiDogecoin, SiXrp} from "react-icons/si";

const data = [
    {icon: FaBitcoin, symbol: "BTC", change: 1.33, price: "29882.01"},
    {icon: FaEthereum, symbol: "ETH", change: 1.33, price: "1900.02"},
    {icon: SiBinance, symbol: "BNB", change: 1.33, price: "0.01"},
    {icon: SiDogecoin, symbol: "DOGE", change: 1.33, price: "0.003"},
    {icon: SiXrp, symbol: "XRP", change: 1.33, price: "1.43"},
    {icon: FaPaypal, symbol: "DOT", change: 1.33, price: "21.4"},
]

const SpotMarket = () => {
    return (
        <div className="col-span-3">
            <div className="flex items-center justify-between ">
                <div className="flex items-center border rounded-t-md px-12 py-2 gap-3 bg-purple-700 text-white">
                    <p className="text-sm font-semibold">Spot Market</p>
                </div>
                <div className="flex items-center gap-2">
                    <ArrowLeft className="p-1 rounded-full bg-white"/>
                    <ArrowRight className="p-1 rounded-full bg-white"/>
                </div>
            </div>
            <div className="flex bg-white">
                <ul className="w-full">
                    {
                        data.map((item, i) => (
                            <li key={i} className={`grid grid-cols-4 text-xs px-4 py-4  ${i % 2 !== 0 ? "bg-gray-200" : "bg-white"} `}>
                                <div className="col-span-2 flex items-center gap-1">
                                    <div className="rounded-full border">
                                        <item.icon className="h-8 w-8"/>
                                    </div>
                                    <div>
                                        <span>Symbol</span>
                                        <p>BTC <span>/ USDT</span></p>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-between ">
                                    <div>
                                        <span>Change (%)</span>
                                        <p>1.33</p>
                                    </div>
                                    <div>
                                        <span>PRICE</span>
                                        <p>$ 0.02</p>
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

export default SpotMarket;
