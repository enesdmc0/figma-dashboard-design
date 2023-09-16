import React from 'react';
import {ArrowLeft, ArrowRight, ArrowDown, ArrowUp} from "lucide-react";

interface Props {
    icon?: any
    title: String
    upDown?: Boolean
    color: String
    minText?: Boolean
}

const CardTitle: React.FC<Props> = ({title, upDown, icon: Icon, color, minText}) => {
    return (
        <div className="flex items-center justify-between ">
            <div style={{background: `${color}`}} className={`flex items-center  rounded-t-md ${minText ? "px-4" : "px-12"}  py-2 gap-3 text-white`}>
                {Icon && <Icon className="w-5 h-5"/>}
                <p className={`text-sm font-semibold`}>{title}</p>
            </div>
            <div className="flex items-center gap-2">
                {upDown
                    ? (<>
                        <ArrowLeft className="p-1 rounded-full bg-white"/>
                        <ArrowRight className="p-1 rounded-full bg-white"/>
                    </>)
                    : (<>
                        <ArrowUp className="p-1 rounded-full bg-white"/>
                        <ArrowDown className="p-1 rounded-full bg-white"/>
                    </>)
                }
            </div>

        </div>
    );
};

export default CardTitle;
