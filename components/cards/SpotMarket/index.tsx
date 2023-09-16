import React from 'react';
import {FaBitcoin, FaEthereum, FaPaypal} from "react-icons/fa";
import {SiBinance, SiDogecoin, SiXrp} from "react-icons/si";
import CardTitle from "@/components/CardTitle";

const data = [
    {icon: FaBitcoin, symbol: "BTC", change: 1.33, price: "298.01", color: "#FF4500"},
    {icon: FaEthereum, symbol: "ETH", change: 1.33, price: "190.02", color: "#1E1E1E"},
    {icon: SiBinance, symbol: "BNB", change: 1.33, price: "0.01", color: "#d6ed26"},
    {icon: SiDogecoin, symbol: "DOGE", change: 1.33, price: "0.003", color: "#a1b50d"},
    {icon: SiXrp, symbol: "XRP", change: 1.33, price: "1.43", color: "#1E1E1E"},
    {icon: FaPaypal, symbol: "DOT", change: 1.33, price: "21.4", color: "#1E1E1E"},
]

const SpotMarket = () => {
    return (
        <div className="col-span-3 flex items-stretch flex-col rounded-md">
            <CardTitle title="Spot Market"  color="#1E1E1E"/>
            <div className="bg-white rounded-md shadow-xl overflow-hidden">
                <ul className="w-full ">
                    {
                        data.map((item, i) => (
                            <li key={i} className={`grid grid-cols-4 text-xs px-2 py-4  ${i % 2 !== 0 ? "bg-[#F5F7F8]" : "bg-white"} `}>
                                <div className="col-span-2 flex items-center gap-1">
                                    <div className="rounded-full">
                                        <item.icon className="h-8 w-8" style={{color: `${item.color}`}}/>
                                    </div>
                                    <div className="space-y-1">
                                        <span>Symbol</span>
                                        <p className="font-semibold">{item.symbol} <span className="text-gray-400 font-normal">/ USDT</span></p>
                                    </div>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 ">
                                    <div className="space-y-0.5 col-span-1">
                                        <span className="text-xs">Change(%)</span>
                                        <p className="text-green-400 font-semibold">{item.change}</p>
                                    </div>
                                    <div className="space-y-0.5 col-span-1">
                                    <span className="text-xs">Price</span>
                                        <p className="text-xs font-semibold">$ {item.price}</p>
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
