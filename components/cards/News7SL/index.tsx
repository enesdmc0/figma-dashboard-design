import React from 'react';
import {File} from "lucide-react";
import CardTitle from "@/components/CardTitle";
import Card from "@/components/Card";


const News7SL = () => {
    return (
        <div className="col-span-6 shadow-xl">
            <CardTitle title="7SL News" upDown icon={File} color="#D952F8"/>
            <div className="flex bg-white rounded-md">
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default News7SL;
