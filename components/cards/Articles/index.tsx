import React from 'react';
import {ArrowLeft, ArrowRight, File, Plus} from "lucide-react";
import Image from "next/image";

const Articles = () => {
    return (
        <div className="col-span-3">
            {/*header*/}
            <div className="flex items-center justify-between ">
                <div className="flex items-center border rounded-t-md px-12 py-2 gap-3 bg-purple-700 text-white">
                    <File className="w-5 h-5"/>
                    <p className="text-sm font-semibold">7SL News</p>
                </div>
                <div className="flex items-center gap-2">
                    <ArrowLeft className="p-1 rounded-full bg-white"/>
                    <ArrowRight className="p-1 rounded-full bg-white"/>
                </div>
            </div>
            {/*bottom*/}
            <div className="flex bg-white">
                <div className=" rounded-md p-3 space-y-5">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 border rounded-full">
                                <Image fill className="rounded-full object-cover " src="/cat.avif" alt=""/>
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
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text hange
                    </div>
                    <div className="bg-gray-200 h-[200px] rounded-md">image</div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
