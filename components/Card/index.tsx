import React from 'react';
import CardHeader from "@/components/CardHeader";
import Image from "next/image";


const Card = () => {
    return (
        <div className="rounded-md p-3 space-y-5">
            <CardHeader/>
            <p className="text-sm ">We`&apos;`ve received credible information that there may soon be an attack on our social
                media accounts, using an inside source at <span className="text-purple-500">#twitter</span> to bypass
                our security. <span className="text-purple-500">#staystrong</span></p>
            <div className="relative aspect-auto h-[220px] rounded-md">
                <Image className="rounded-md overflow-hidden object-cover" fill src="/card.avif" alt="Cart"/>
            </div>
        </div>
    );
};

export default Card;
