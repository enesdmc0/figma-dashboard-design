import React from 'react';
import Image from "next/image";
import {GrReddit} from "react-icons/gr";
import CardTitle from "@/components/CardTitle";
import CardHeader from "@/components/CardHeader";


const Discussion = () => {
    return (
        <div className="col-span-4">
            <CardTitle title="Discussion" color="#FF4500" upDown icon={GrReddit}/>
            <div className="flex bg-white rounded-md shadow-xl">
                <div className=" rounded-md flex p-3 space-x-3 space-y-3">
                    <div className="relative flex-1 aspect-auto rounded-md">
                        <Image className="rounded-md overflow-hidden object-cover" fill src="/card.avif" alt="Cart"/>
                    </div>
                    <div className="flex-1 space-y-3">
                        <CardHeader/>
                        <p className="text-sm ">We`&apos;`ve received credible information that there may soon be an attack on
                            our social media accounts, using an inside source at <span
                                className="text-purple-500">#twitter</span> to bypass our security. <span
                                className="text-purple-500">#staystrong</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Discussion;
