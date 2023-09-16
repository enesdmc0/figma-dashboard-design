import React from 'react';
import Image from "next/image";
import {Plus} from "lucide-react";

const CardHeader = () => {
    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 border rounded-full">
                    <Image fill className="rounded-full object-cover "  src="/nft.avif" alt=""/>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-sm">Crypto Punks</h3>
                    <p className="text-xs  text-gray-500">4 minutes ago</p>
                </div>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
                <p className="font-semibold text-sm">Follow</p>
                <Plus/>
            </div>
        </div>
    );
};

export default CardHeader;
